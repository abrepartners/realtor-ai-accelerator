import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/tracking";
import { CheckCircle } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(7, "Valid phone required").max(20),
  teamSize: z.string().trim().max(50).optional(),
  currentCRM: z.string().trim().max(100).optional(),
});

type FormData = z.infer<typeof schema>;

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  variant?: "demo" | "waitlist";
}

const CRMDemoForm = ({ open, onOpenChange, variant = "demo" }: Props) => {
  const [submitted, setSubmitted] = useState(false);
  const isDemo = variant === "demo";

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", teamSize: "", currentCRM: "" },
  });

  const onSubmit = (data: FormData) => {
    trackEvent("CRMDemo_Submit", { variant, formData: { name: data.name, email: data.email } });
    setSubmitted(true);
  };

  const handleClose = (val: boolean) => {
    if (!val) { setSubmitted(false); form.reset(); }
    onOpenChange(val);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-h-[90vh] overflow-y-auto bg-background sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-foreground">
            {submitted ? (isDemo ? "Demo Requested" : "You're on the List") : (isDemo ? "Book a CRM Demo" : "Join the CRM Waitlist")}
          </DialogTitle>
          <DialogDescription>
            {submitted ? "We'll reach out soon with next steps." : (isDemo ? "Tell us a bit about your setup and we'll schedule a walkthrough." : "Get early access and updates on the AI CRM.")}
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-6 text-center">
            <CheckCircle className="h-12 w-12 text-accent" />
            <p className="text-sm text-muted-foreground">
              {isDemo ? "Expect an email with calendar booking options shortly." : "We'll notify you as soon as early access opens."}
            </p>
            {isDemo && <a href="#" className="text-sm font-medium text-accent underline">[Schedule on Calendar]</a>}
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField control={form.control} name="name" render={({ field }) => (
                <FormItem><FormLabel>Name</FormLabel><FormControl><Input placeholder="Full name" {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem><FormLabel>Email</FormLabel><FormControl><Input type="email" placeholder="you@email.com" {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField control={form.control} name="phone" render={({ field }) => (
                <FormItem><FormLabel>Phone</FormLabel><FormControl><Input type="tel" placeholder="(555) 555-5555" {...field} /></FormControl><FormMessage /></FormItem>
              )} />
              {isDemo && (
                <>
                  <FormField control={form.control} name="teamSize" render={({ field }) => (
                    <FormItem><FormLabel>Team Size (optional)</FormLabel><FormControl><Input placeholder="e.g. 5 agents" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="currentCRM" render={({ field }) => (
                    <FormItem><FormLabel>Current CRM (optional)</FormLabel><FormControl><Input placeholder="e.g. Follow Up Boss" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                </>
              )}
              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                {isDemo ? "Request a Demo" : "Join the Waitlist"}
              </Button>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CRMDemoForm;

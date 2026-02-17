import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { trackEvent } from "@/lib/tracking";
import { submitLeadToGHL } from "@/lib/ghl";
import { CheckCircle } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(7, "Valid phone required").max(20),
  brokerage: z.string().trim().max(100).optional(),
  city: z.string().trim().max(100).optional(),
  role: z.string().min(1, "Select a role"),
});

type FormData = z.infer<typeof schema>;

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const RegistrationForm = ({ open, onOpenChange }: Props) => {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", brokerage: "", city: "", role: "" },
  });

  const onSubmit = async (data: FormData) => {
    await submitLeadToGHL("reserve_seat", {
      name: data.name,
      email: data.email,
      phone: data.phone,
      brokerage: data.brokerage || null,
      city: data.city || null,
      role: data.role,
    });
    trackEvent("ReserveSeat_Click", { formData: { name: data.name, email: data.email } });
    setSubmitted(true);
  };

  const handleClose = (val: boolean) => {
    if (!val) {
      setSubmitted(false);
      form.reset();
    }
    onOpenChange(val);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[30rem]">
        <DialogHeader className="space-y-3">
          <span className="section-kicker">Enrollment</span>
          <DialogTitle>{submitted ? "You're In!" : "Reserve My Seat"}</DialogTitle>
          <DialogDescription>
            {submitted ? "Check your email for confirmation details." : "Secure your spot in the AI Workshop for Realtors."}
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="section-frame flex flex-col items-center gap-4 px-5 py-8 text-center">
            <CheckCircle className="h-12 w-12 text-accent" />
            <p className="meta-copy text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-foreground">
              March 24, 2026 · 10:00 AM - 12:00 PM CST
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Your Google Meet link will be sent to your email. We'll also send prep materials and your prompt pack before
              the workshop.
            </p>
            <a href="#" className="text-sm font-medium text-accent underline decoration-accent/50 underline-offset-4">
              Add to Google Calendar
            </a>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField control={form.control} name="name" render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="you@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="phone" render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="(555) 555-5555" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="brokerage" render={({ field }) => (
                <FormItem>
                  <FormLabel>Brokerage / Team (optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Brokerage name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="city" render={({ field }) => (
                <FormItem>
                  <FormLabel>City (optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Your city" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="role" render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="solo">Solo Agent</SelectItem>
                      <SelectItem value="team">Team</SelectItem>
                      <SelectItem value="brokerage">Brokerage</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )} />
              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Reserve My Seat
              </Button>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationForm;

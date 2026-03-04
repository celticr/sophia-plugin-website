import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";

const orgTypes = [
  "Government department",
  "NGO / civil society organisation",
  "Company / workplace",
  "University / school",
  "Healthcare organisation",
  "Foundation",
  "Other",
] as const;

const installLocations = [
  "Organisation website",
  "Internal employee portal",
  "University / student services",
  "Government service portal",
  "Community support page",
  "Other",
] as const;

const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia",
  "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium",
  "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei",
  "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Chad", "Chile",
  "China", "Colombia", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic",
  "Denmark", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Estonia", "Ethiopia",
  "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece",
  "Guatemala", "Guinea", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran",
  "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
  "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Liberia", "Libya", "Liechtenstein",
  "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
  "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
  "Namibia", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia",
  "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines",
  "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saudi Arabia", "Senegal", "Serbia",
  "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Somalia", "South Africa", "South Korea",
  "Spain", "Sri Lanka", "Sudan", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan",
  "Tanzania", "Thailand", "Togo", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan",
  "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
  "Uzbekistan", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe",
] as const;

const formSchema = z.object({
  organisationName: z.string().trim().min(1, "Organisation name is required").max(200),
  organisationType: z.string().min(1, "Please select an organisation type"),
  country: z.string().min(1, "Please select a country"),
  website: z.string().trim().max(500).optional().or(z.literal("")),
  fullName: z.string().trim().min(1, "Full name is required").max(200),
  role: z.string().trim().max(200).optional().or(z.literal("")),
  workEmail: z.string().trim().email("Please enter a valid email").max(255),
  installLocations: z.array(z.string()).min(1, "Please select at least one option"),
});

type FormValues = z.infer<typeof formSchema>;

interface RegisterInterestDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const RegisterInterestDialog = ({ open, onOpenChange }: RegisterInterestDialogProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      organisationName: "",
      organisationType: "",
      country: "",
      website: "",
      fullName: "",
      role: "",
      workEmail: "",
      installLocations: [],
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const body = [
        `Organisation: ${data.organisationName}`,
        `Type: ${data.organisationType}`,
        `Country: ${data.country}`,
        `Website: ${data.website || "N/A"}`,
        ``,
        `Contact: ${data.fullName}`,
        `Role: ${data.role || "N/A"}`,
        `Email: ${data.workEmail}`,
        ``,
        `Install locations: ${data.installLocations.join(", ")}`,
      ].join("\n");

      const mailtoLink = `mailto:action@springact.org?subject=${encodeURIComponent(
        `Sophia Plugin – Interest from ${data.organisationName}`
      )}&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoLink;

      toast({
        title: "Opening your email client…",
        description: "If it doesn't open, please email action@springact.org directly.",
      });

      form.reset();
      onOpenChange(false);
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or email action@springact.org directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Register interest</DialogTitle>
          <p className="text-sm text-muted-foreground">
            Tell us about your organisation and we'll get you set up with Sophia.
          </p>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Section 1 */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">
                Organisation details
              </h3>

              <FormField
                control={form.control}
                name="organisationName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Organisation name *</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Spring ACT" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="organisationType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type of organisation *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {orgTypes.map((t) => (
                          <SelectItem key={t} value={t}>
                            {t}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {countries.map((c) => (
                          <SelectItem key={c} value={c}>
                            {c}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Website</FormLabel>
                    <FormControl>
                      <Input placeholder="https://example.org" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">
                Contact person
              </h3>

              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Jane Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role / position</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Head of Partnerships" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="workEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Work email *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="jane@example.org" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">
                Intended use
              </h3>

              <FormField
                control={form.control}
                name="installLocations"
                render={() => (
                  <FormItem>
                    <FormLabel>Where would you like to install Sophia? *</FormLabel>
                    <div className="space-y-3 mt-2">
                      {installLocations.map((location) => (
                        <FormField
                          key={location}
                          control={form.control}
                          name="installLocations"
                          render={({ field }) => (
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(location)}
                                  onCheckedChange={(checked) => {
                                    const current = field.value || [];
                                    field.onChange(
                                      checked
                                        ? [...current, location]
                                        : current.filter((v) => v !== location)
                                    );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal cursor-pointer">
                                {location}
                              </FormLabel>
                            </FormItem>
                          )}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center rounded-lg px-8 py-4 text-base font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {isSubmitting ? "Submitting…" : "Submit registration"}
            </button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterInterestDialog;

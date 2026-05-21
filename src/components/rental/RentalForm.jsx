import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import SectionHeading from "../ui/SectionHeading";

export default function RentalForm() {
  const [showSuccess, setShowSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 1000));
    setShowSuccess(true);
    reset();
  };

  return (
    <section className="py-24 bg-brand-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Request a Quote"
          title="Tell Us About Your Event"
          description="Fill out the form below and we'll get back to you with pricing and availability."
        />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Input
              label="First Name"
              {...register("firstName", { required: "First name is required" })}
              error={errors.firstName?.message}
              required
            />
            <Input
              label="Last Name"
              {...register("lastName", { required: "Last name is required" })}
              error={errors.lastName?.message}
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Input
              label="Email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email",
                },
              })}
              error={errors.email?.message}
              required
            />
            <Input
              label="Phone"
              type="tel"
              {...register("phone", { required: "Phone is required" })}
              error={errors.phone?.message}
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-brand-dark mb-1.5">
                Cart Type <span className="text-brand-red">*</span>
              </label>
              <div className="relative">
                <select
                  {...register("cartType", { required: "Cart type is required" })}
                  className="w-full appearance-none px-4 py-3 pr-10 rounded-lg border border-gray-700 bg-brand-dark text-white text-base focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent cursor-pointer"
                >
                  <option value="">Select type...</option>
                  <option value="2-passenger">2 Passenger</option>
                  <option value="4-passenger">4 Passenger</option>
                  <option value="6-passenger">6 Passenger</option>
                  <option value="utility">Utility / Flat Bed</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              {errors.cartType && (
                <p className="mt-1 text-sm text-brand-red">
                  {errors.cartType.message}
                </p>
              )}
            </div>
            <Input
              label="Number of Carts"
              type="number"
              min="1"
              {...register("numberOfCarts", {
                required: "Number of carts is required",
                min: { value: 1, message: "At least 1 cart" },
              })}
              error={errors.numberOfCarts?.message}
              required
            />
          </div>

          <Input
            label="Event Location"
            placeholder="Address or venue name"
            {...register("location", { required: "Location is required" })}
            error={errors.location?.message}
            required
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Input
              label="Event Start Date"
              type="date"
              {...register("startDate", { required: "Start date is required" })}
              error={errors.startDate?.message}
              required
            />
            <Input
              label="Event End Date"
              type="date"
              {...register("endDate", { required: "End date is required" })}
              error={errors.endDate?.message}
              required
            />
          </div>

          <Input
            label="Driver's License Number"
            {...register("driversLicense")}
            placeholder="Optional"
          />

          <Input
            label="Additional Details"
            type="textarea"
            {...register("details")}
            placeholder="Tell us more about your event, special requirements, etc."
          />

          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Request Quote"}
          </Button>
        </form>
      </div>

      <Modal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Quote Request Sent!"
      >
        <p className="text-brand-muted">
          Thank you for your rental inquiry! Our team will contact you shortly
          with pricing and availability.
        </p>
        <Button
          onClick={() => setShowSuccess(false)}
          className="mt-6 w-full"
        >
          Close
        </Button>
      </Modal>
    </section>
  );
}

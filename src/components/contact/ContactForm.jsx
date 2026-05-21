import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Modal from "../ui/Modal";

export default function ContactForm({ productName }) {
  const [showSuccess, setShowSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      subject: productName ? `Inquiry about ${productName}` : "",
    },
  });

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 1000));
    setShowSuccess(true);
    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Input
            label="Name"
            {...register("name", { required: "Name is required" })}
            error={errors.name?.message}
            required
          />
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
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Input
            label="Phone"
            type="tel"
            {...register("phone")}
            placeholder="Optional"
          />
          <Input
            label="Subject"
            {...register("subject", { required: "Subject is required" })}
            error={errors.subject?.message}
            required
          />
        </div>

        <Input
          label="Message"
          type="textarea"
          {...register("message", { required: "Message is required" })}
          error={errors.message?.message}
          placeholder="Tell us how we can help..."
          required
        />

        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>

      <Modal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Message Sent!"
      >
        <p className="text-brand-muted">
          Thank you for reaching out! We&apos;ll get back to you as soon as
          possible.
        </p>
        <Button onClick={() => setShowSuccess(false)} className="mt-6 w-full">
          Close
        </Button>
      </Modal>
    </>
  );
}

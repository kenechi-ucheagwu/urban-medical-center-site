import Button, { type ButtonSize, type ButtonVariant } from "@/components/Button";
import { BOOKING_URL } from "@/lib/clinic";

interface BookingButtonProps {
  label?: string;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export default function BookingButton({
  label = "Book Appointment",
  className = "",
  variant = "primary",
  size = "md",
}: BookingButtonProps) {
  return (
    <Button href={BOOKING_URL} variant={variant} size={size} className={className}>
      {label}
    </Button>
  );
}

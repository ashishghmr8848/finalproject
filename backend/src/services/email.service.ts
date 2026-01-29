import {emailConfig, transporter} from "../config/email";

class EmailService {
  async sendEmail(to: string, subject: string, text: string, html?: string) {
    try {
      await transporter.sendMail({
        from: `${emailConfig.fromName} <${emailConfig.from}>`,
        to,
        subject,
        text,
        html,
      });
    } catch (error) {
      console.error("Error sending email:", error);
    }
  }

  async sendBookingConfirmation(booking: any) {
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Booking Confirmation</h2>
        <p>Dear ${booking.user.firstName} ${booking.user.lastName},</p>
        <p>Your appointment has been confirmed!</p>
        
        <div style="background-color: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 5px;">
          <h3>Appointment Details</h3>
          <p><strong>Reference Number:</strong> ${booking.bookingReference}</p>
          <p><strong>Type:</strong> ${booking.appointmentType.typeName}</p>
          <p><strong>Date:</strong> ${new Date(booking.appointmentDate).toLocaleDateString()}</p>
          <p><strong>Time:</strong> ${booking.appointmentTime}</p>
          <p><strong>Location:</strong> ${booking.location.locationName}</p>
          <p><strong>Address:</strong> ${booking.location.addressLine1}, ${booking.location.city}, ${booking.location.state} ${booking.location.zipCode}</p>
        </div>
        
        <p>Please arrive 10 minutes before your scheduled time.</p>
        <p>If you need to cancel or reschedule, please do so at least 24 hours in advance.</p>
        
        <p>Thank you!</p>
      </div>
    `;

    return await this.sendEmail(
      booking.user.email,
      "Appointment Confirmation",
      html,
    );
  }

  async sendCancellationConfirmation(booking: any) {
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Appointment Cancelled</h2>
        <p>Dear ${booking.user.firstName} ${booking.user.lastName},</p>
        <p>Your appointment has been cancelled.</p>
        
        <div style="background-color: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 5px;">
          <h3>Cancelled Appointment Details</h3>
          <p><strong>Reference Number:</strong> ${booking.bookingReference}</p>
          <p><strong>Type:</strong> ${booking.appointmentType.typeName}</p>
          <p><strong>Date:</strong> ${new Date(booking.appointmentDate).toLocaleDateString()}</p>
          <p><strong>Time:</strong> ${booking.appointmentTime}</p>
          <p><strong>Location:</strong> ${booking.location.locationName}</p>
        </div>
        
        <p>You can book a new appointment at any time through our website.</p>
        
        <p>Thank you!</p>
      </div>
    `;

    return await this.sendEmail(
      booking.user.email,
      "Appointment Cancelled",
      html,
    );
  }

  async sendWaitlistNotification(waitlistEntry: any, date: Date, time: string) {
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Appointment Slot Available!</h2>
        <p>Dear ${waitlistEntry.user.firstName} ${waitlistEntry.user.lastName},</p>
        <p>Good news! A slot has become available for your requested appointment.</p>
        
        <div style="background-color: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 5px;">
          <h3>Available Slot Details</h3>
          <p><strong>Type:</strong> ${waitlistEntry.appointmentType.typeName}</p>
          <p><strong>Date:</strong> ${date.toLocaleDateString()}</p>
          <p><strong>Time:</strong> ${time}</p>
          <p><strong>Location:</strong> ${waitlistEntry.location.locationName}</p>
        </div>
        
        <p>Please book this slot as soon as possible as it may be taken by others.</p>
        <p><a href="${process.env.FRONTEND_URL}/book" style="background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 10px 0;">Book Now</a></p>
        
        <p>Thank you!</p>
      </div>
    `;

    return await this.sendEmail(
      waitlistEntry.user.email,
      "Appointment Slot Available",
      html,
    );
  }

  async sendPasswordResetEmail(email: string, resetToken: string) {
    const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}`;

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Password Reset Request</h2>
        <p>You requested to reset your password.</p>
        <p>Click the button below to reset your password:</p>
        <p><a href="${resetUrl}" style="background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 10px 0;">Reset Password</a></p>
        <p>This link will expire in 1 hour.</p>
        <p>If you didn't request this, please ignore this email.</p>
      </div>
    `;

    return await this.sendEmail(email, "Password Reset Request", html);
  }

  async sendAppointmentReminder(booking: any) {
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Appointment Reminder</h2>
        <p>Dear ${booking.user.firstName} ${booking.user.lastName},</p>
        <p>This is a reminder about your upcoming appointment tomorrow.</p>
        
        <div style="background-color: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 5px;">
          <h3>Appointment Details</h3>
          <p><strong>Reference Number:</strong> ${booking.bookingReference}</p>
          <p><strong>Type:</strong> ${booking.appointmentType.typeName}</p>
          <p><strong>Date:</strong> ${new Date(booking.appointmentDate).toLocaleDateString()}</p>
          <p><strong>Time:</strong> ${booking.appointmentTime}</p>
          <p><strong>Location:</strong> ${booking.location.locationName}</p>
          <p><strong>Address:</strong> ${booking.location.addressLine1}, ${booking.location.city}, ${booking.location.state} ${booking.location.zipCode}</p>
        </div>
        
        <p>Please arrive 10 minutes before your scheduled time.</p>
        <p>See you tomorrow!</p>
      </div>
    `;

    return await this.sendEmail(
      booking.user.email,
      "Appointment Reminder - Tomorrow",
      html,
    );
  }
}

export default new EmailService();

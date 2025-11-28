import Booking from "../Models/bookingModel.js";
import Notification from "../Models/notificationModel.js";

// Fetch notifications
export const getUserNotifications = async (req, res) => {
  const { userId } = req.params;
  const notes = await Notification.find({ userId }).sort({ createdAt: -1 });
  res.json(notes);
};

// Daily check algorithm
export const dailyRentalCheck = async () => {
  const today = new Date();
  const bookings = await Booking.find();

  for (const b of bookings) {
    const end = new Date(b.endDate);
    const diff = Math.ceil((end - today) / (1000 * 60 * 60 * 24));

    if (diff === 1 && !b.notifiedEnding) {
      await Notification.create({
        userId: b.userId,
        bookingId: b._id,
        message: `Your ${b.vehicleName} rental ends tomorrow!`,
      });

      b.notifiedEnding = true;
      await b.save();
    }

    // Remove notifications for already expired rentals
    if (diff < 0) {
      await Notification.deleteMany({
        bookingId: b._id, // used bookingId instead of regex because it is more reliable
      });
    }
  }
};

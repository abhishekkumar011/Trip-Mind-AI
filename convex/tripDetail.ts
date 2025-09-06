import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const createTripDetail = mutation({
  args: {
    tripId: v.string(),
    tripDetail: v.any(),
    uid: v.id("UserTable"),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("TripDetailTable", {
      tripId: args.tripId,
      tripDetail: args.tripDetail,
      uid: args.uid,
    });
  },
});

import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

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

export const getUserTrips = query({
  args: {
    uid: v.id("UserTable"),
  },
  handler: async (ctx, args) => {
    const results = await ctx.db
      .query("TripDetailTable")
      .filter((q) => q.eq(q.field("uid"), args.uid))
      .order("desc")
      .collect();

    return results;
  },
});

export const getTripById = query({
  args: {
    uid: v.id("UserTable"),
    tripid: v.string(),
  },
  handler: async (ctx, args) => {
    const result = await ctx.db
      .query("TripDetailTable")
      .filter((q) =>
        q.and(
          q.eq(q.field("uid"), args.uid),
          q.eq(q.field("tripId"), args.tripid)
        )
      )
      .collect();

    return result[0];
  },
});

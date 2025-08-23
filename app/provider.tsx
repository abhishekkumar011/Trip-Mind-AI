"use client"
import React, { useEffect } from "react";
import Header from "./_components/Header";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const createUser = useMutation(api.user.createNewUser);
  const { user } = useUser();

  useEffect(() => {
    user && createNewUser();
  }, [user])

  const createNewUser = async () => {
    if (user) {
      const result = await createUser({
        name: user?.fullName ?? "",
        email: user?.primaryEmailAddress?.emailAddress ?? "",
        imageUrl: user?.imageUrl ?? "",
      });
    }
  };

  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Provider;

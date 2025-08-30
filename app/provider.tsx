"use client";
import React, { useContext, useEffect, useState } from "react";
import Header from "./_components/Header";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { UserContext } from "@/context/UserContext";

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const createUser = useMutation(api.user.createNewUser);
  const [userDetails, setUserDetails] = useState<any>();

  const { user } = useUser();

  useEffect(() => {
    user && createNewUser();
  }, [user]);

  const createNewUser = async () => {
    if (user) {
      const result = await createUser({
        name: user?.fullName ?? "",
        email: user?.primaryEmailAddress?.emailAddress ?? "",
        imageUrl: user?.imageUrl ?? "",
      });
      setUserDetails(result);
    }
  };

  return (
    <UserContext.Provider value={{ userDetails, setUserDetails }}>
      <div>
        <Header />
        {children}
      </div>
    </UserContext.Provider>
  );
}

export default Provider;

export const useUserContext = () => {
  return useContext(UserContext);
};

'use client';

import * as React from "react"

import { useUserStore } from '@/store/UserStore';
import { getUserProfile } from "@/lib/db/query/user.query";
import { useQuery } from "@tanstack/react-query";
import { ProfileForm } from "./ProfileForm";

export const EditProfilePage = () => {
  const { user, setUser } = useUserStore();
  const { isPending, isError, data, error, refetch } = useQuery({
    queryKey: ["profile"],
    queryFn: getUserProfile,
  });
  

  
  const userProfile = data?.data?.find((userProfile: any) => userProfile?.id === user?.id);
  console.log("userProfile", userProfile)

  
  return (
    <>

      {
        userProfile ? <ProfileForm userProfile={userProfile} /> : ""
      }
       
      
    </>
  );
};

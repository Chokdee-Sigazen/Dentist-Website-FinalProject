import React from "react";
import { getDentist } from "@/lib/getDentists";
import ApptCardMotion from "./ApptCardMotion";

export interface ApptInfoProps {
  user: string;
  appointmentDate: string;
  work: string | null;
  dentist: string;
  createdAt: Date;
  finish: boolean;
}

export default async function ApptCard(props: ApptInfoProps) {
  const dentistData = await getDentist();
  const dentistName = dentistData.data.find(
    (dentist: { id: string }) => dentist.id === props.dentist
  )?.name;
  const dentistWork = dentistData.data.find(
    (dentist: { id: string }) => dentist.id === props.dentist
  )?.areaOfExpertise;
  const date = new Date(props.appointmentDate).toLocaleString();
  const createdDate = new Date(props.createdAt).toLocaleString();

  return (
    <ApptCardMotion
      dentistName={dentistName}
      dentistWork={dentistWork}
      date={date}
      createdDate={createdDate}
    ></ApptCardMotion>
  );
}

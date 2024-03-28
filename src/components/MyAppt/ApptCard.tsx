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
  index: number;
}

export default async function ApptCard(props: ApptInfoProps) {
  const dentistData = await getDentist();
  const dentistName = dentistData.data.find(
    (dentist: { id: string }) => dentist.id === props.dentist
  )?.name;
  const dentistWork = dentistData.data.find(
    (dentist: { id: string }) => dentist.id === props.dentist
  )?.areaOfExpertise;
  const dentistId = props.dentist;
  const date = props.appointmentDate;
  const createdDate = props.createdAt;
  const user = props.user;

  return (
    <ApptCardMotion
      index={props.index}
      dentistName={dentistName}
      dentistWork={dentistWork}
      dentistId = {dentistId}
      date={date}
      createdDate={createdDate}
      user={user}
      allDentist = {dentistData}
    ></ApptCardMotion>
  );
}

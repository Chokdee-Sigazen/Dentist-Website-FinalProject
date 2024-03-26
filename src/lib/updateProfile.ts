// import { sendProfile } from "@/components/Profile/EditProfiePopup";
// import { getUsers } from "./getUsers";
// import { useSession } from "next-auth/react";

// export async function updateProfile(props: sendProfile): Promise<void> {
//     try {
//         const file = props.image;
//         const session = useSession();
//         const allUser = await getUsers();
//         const user = await allUser.findByIdAndUpdate(session.data!.user._doc?._id,{...props});
//         console.log(user);
//         console.log("success?");
//     } catch (error) {
//         console.error("Failed ", error);
//         throw error;
//     }
// }

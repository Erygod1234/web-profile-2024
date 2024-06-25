import Image from "next/image";
import React from "react";
import {
  faDocker,
  faYoutube,
  faFacebook,
  faInstagram,

} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faC, faBolt, faPhone, faAddressBook } from "@fortawesome/free-solid-svg-icons";
type Props = {};

const Profile = (props: Props) => {
  return (
    <div className="bg-blue-100 h-full p-4 rounded-xl px-4">
      <div className="flex justify-center items-center pt-4 pb-2">
        <Image
          src="/149303571_1198086640609971_5698178526074327173_n.jpg"
          width={500}
          height={500}
          alt="profile picture"
          className="w-3/4 aspect-square rounded-full border-4 border-white"
        />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Supphawit Noowong</h1>
        <p className="text-base">Computer Engineer</p>
      </div>

      <div className="py-10 text-center ">" Happy In Life "</div>
      <div className="p-6 mx-1 xl:mx-6 bg-blue-300 rounded-md">
        <p>
          <b>Age:</b> 20
        </p>
        <p>
          <b>Status:</b> Single
        </p>
        <p>
          <b>Location:</b> Phatthalung
        </p>
      </div>
      <div className="p-6 mx-1 xl:mx-6 bg-blue-300 rounded-md mt-5">
        <p>
          <FontAwesomeIcon icon={faAddressBook} />
          <b>Address</b>
          <div>238 Khaochaison Khaochaison Phatthalung 93130</div>
        </p>


      </div>
      <div className="p-6 mx-1 xl:mx-6 bg-blue-300 rounded-md mt-5">
        <p>

          <FontAwesomeIcon icon={faYoutube} />
          <a href="https://www.youtube.com/channel/UCMFORuSy0jxLWQ7GTZFXfiA" className="pl-2">Supphawit Noownog</a>
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} />
          <a href="https://www.facebook.com/profile.php?id=100012259385202" className="pl-2">088-6108485</a>
        </p>
        <p>
          <FontAwesomeIcon icon={faInstagram} />
          <a href="https://www.instagram.com/suphawit_noowong/" className="pl-2">suphawit_noowong</a>
        </p>

      </div>
    </div>
  );
};

export default Profile;

"use client";

import GuestLayout from "../layouts/guestLayout";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { Button, Card } from "flowbite-react";
import Image from "next/image";

export default function StaticCarousel() {
  return (
    <GuestLayout>
      <div className="landing-page-container">
        <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
          <Card>
            <p>
              Presenting Educational And Training Content With Passion And AI.
            </p>
          </Card>
        </h5>

        <div className="relative h-40 w-10 bg-blue-300 rounded-lg shadow-lg overflow-hidden">
          <div className="absolute top-0 right-0 bg-blue-500 h-8 w-8 transform rotate-45 origin-top-left"></div>
        </div>

        <div className="flex justify-between landing-page-main-card-container">
          <Card className="max-w-sm bg-blue-200  " href="#">
            <Player
              autoplay
              loop
              src="https://lottie.host/48a149fd-a98b-4065-8cb8-5121e3ef1195/IOzWTMvfAt.json"
              style={{ height: "300px", width: "300px" }}
            >
              <Card className="max-w-sm " href="#">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <p>Course Based</p>
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  <p>Organize Contents for Colleges with Different Courses</p>
                </p>
              </Card>
              <Controls
                visible={false}
                buttons={["play", "repeat", "frame", "debug"]}
              />
            </Player>
          </Card>

          <Card
            className="max-w-sm landing-page-plain-card bg-orange-100"
            href="#"
          >
            <div className="project-card bg-blue-200">
              <marquee className="achievement-label">University Based</marquee>
            </div>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p className="text-center">University Based</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p>
                Ability to organize contents following the University structure
              </p>
            </p>
            <Button>
              <p>Read more</p>
            </Button>
          </Card>

          <Card horizontal>
            <Player
              autoplay
              loop
              src="https://lottie.host/a64924ec-d937-4de8-a6bd-358ed1e03e20/ryI7CcbNGU.json"
              style={{ height: "300px", width: "300px" }}
            >
              <Card className="max-w-sm bg-green-400 " href="#">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <p>High School</p>
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  <p>
                    Contents can also be arranged as High Schools to help small
                    schools manage their contents
                  </p>
                </p>
              </Card>
              <Controls
                visible={false}
                buttons={["play", "repeat", "frame", "debug"]}
              />
            </Player>
          </Card>
        </div>
      </div>
    </GuestLayout>
  );
}

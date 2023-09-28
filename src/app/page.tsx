import Image from "next/image";
import Link from "next/link";
import bannerImage from "@/assets/hero.png";
import { categories, courses } from "@/sampledata";

import { ICoursePartial } from "@/types/course";
import { Button } from "@/components/ui/button";
import CourseCard from "@/components/course/CourseCard";
import Icon from "@/components/icon/Icon";

export default function Home() {
  return (
    <main>
      {/* hero section */}
      <section className="mb-4 flex gap-6 bg-gray-50 py-5 pl-10 dark:bg-gray-900 md:mb-6 md:gap-8 md:py-0 md:pl-16 lg:mb-8 lg:gap-10 lg:pl-20">
        <div className="flex flex-col justify-center gap-3">
          <h1 className="text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl">
            Learn with expert anytime anywhere
          </h1>
          <p className="md:text-md text-sm lg:text-lg">
            Our mission is to help people to find the best course online and
            learn with expert anytime, anywhere.
          </p>
          <Button className="w-fit">Create Account</Button>
        </div>

        <Image
          className="hidden md:block md:w-[700px] lg:w-[800px]"
          src={bannerImage}
          alt="banner image"
        />
      </section>

      {/* top categories section */}
      <section className="my-4 px-10 md:my-6 md:px-16 lg:my-14 lg:px-20">
        <h1 className="my-4 text-center text-lg font-semibold md:my-5 md:text-xl lg:my-6 lg:text-2xl">
          Browse Top Category
        </h1>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-5">
          {categories.map((item, index) => (
            <Link
              href={item.path}
              key={Date.now() + index}
              className={`${index > 3 ? "hidden" : "block"}
                sm:${index > 5 ? "hidden" : "block"}
                lg:${index > 11 ? "hidden" : "block"}`}
            >
              <div className="flex gap-4 border border-gray-200 p-3 hover:shadow-lg dark:hover:shadow-md dark:hover:shadow-gray-600 md:p-4 lg:p-5">
                <div className="flex h-14 w-14 items-center justify-center">
                  <Icon id={item.iconId} className="stroke-primary-500" />
                </div>
                <div className="md:text-md flex flex-col justify-center text-sm">
                  <h4>{item.name}</h4>
                  <div>
                    {item.totalCourses}
                    &nbsp;Courses
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="md:text-md mt-4 flex items-center justify-center gap-2 text-sm">
          <p className="hidden sm:block">
            We have more category & subcategory.
          </p>
          <Link
            href="/categories"
            className="flex items-center gap-1 text-primary-500"
          >
            Browse All
            <Icon id="ArrowRight" className="w-6 stroke-primary-500" />
          </Link>
        </div>
      </section>

      {/* best selling courses */}
      <section className="my-4 bg-gray-50 p-2 dark:bg-gray-800 md:my-6 md:p-10 md:px-16 lg:my-14 lg:px-20">
        <h1 className="my-4 text-center text-lg font-semibold dark:text-white md:my-5 md:text-xl lg:my-6 lg:text-2xl">
          Best selling courses
        </h1>
        {/* container for course categories */}
        <div className="flex cursor-pointer flex-wrap items-center justify-center gap-5">
          {courses.map((courseData: ICoursePartial) => {
            return <CourseCard key={courseData.id} data={courseData} />;
          })}
        </div>
      </section>
    </main>
  );
}

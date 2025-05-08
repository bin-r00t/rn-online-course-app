import { View, Text, ScrollView } from "react-native";
import CourseCard from "./CourseCard";
import { useState } from "react";

export default function RecommendForYou() {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "FFmpeg - The Complete Guide",
      thumbnail: "https://picsum.photos/id/110/200/300",
      tutor: "Jack Ma",
      rate: 3.5,
      rateCount: 108,
      enrollStatus: "Enrolled",
      category: "Web exclusive",
    },
    {
      id: 2,
      title: "NextJS - From stretch to advanced abcdefg",
      thumbnail: "https://picsum.photos/id/111/200/300",
      tutor: "John Doe",
      rate: 5,
      rateCount: 123,
      enrollStatus: null, // "Enrolled",
      category: "Web exclusive",
    },
    {
      id: 3,
      title: "MongoDB",
      thumbnail: "https://picsum.photos/id/112/200/300",
      tutor: "Maria Jean",
      rate: 4,
      rateCount: 111,
      enrollStatus: null, // "Enrolled",
      category: "Data Science",
    },
    {
      id: 4,
      title: "Helo World",
      thumbnail: "https://picsum.photos/id/113/200/300",
      tutor: "SpaceX",
      rate: 4.5,
      rateCount: 909,
      enrollStatus: null, // "Enrolled",
      category: "Web Development",
    },
    {
      id: 5,
      title: "Who are you?",
      thumbnail: "https://picsum.photos/id/114/200/300",
      tutor: "Logan",
      rate: 2.1,
      rateCount: 11,
      enrollStatus: null,
      category: "Web Development",
    },
  ]);
  return (
    <View className="py-8 bg-white gap-2">
      <Text className="p-2 px-4 text-3xl font-bold">热门 Full Stack Web Developers</Text>
      <ScrollView
        horizontal
        className="gap-2"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, gap: 16 }}
      >
        {courses.map((course) => (
          <CourseCard
            id={course.id}
            key={course.id}
            title={course.title}
            thumbnail={course.thumbnail}
            tutor={course.tutor}
            rate={course.rate}
            rateCount={course.rateCount}
            enrollStatus={course.enrollStatus}
            category={course.category}
          />
        ))}
      </ScrollView>
    </View>
  );
}

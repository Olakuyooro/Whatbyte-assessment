"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import dynamic from "next/dynamic";
import NavBar from "./components/navbar";
import { PercentileChart } from "./components/percentile_chart";
import QuickStat from "./components/quick_stat";
import Info from "./components/info";
import Header from "./components/header";
import SyllabusAnalysis from "./components/syllabus_analysis";
import { Modal } from "./components/modal";
import { useState } from "react";
import Image from "next/image";
import html_icon from "../../public/images/html_icon.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import MobileNavbar from "./components/navbar/mobile";

const DonutChart = dynamic(() => import("@/app/components/score_chart/index"), {
  ssr: false,
});

const formSchema = z.object({
  rank: z
    .string()
    .min(1, "Rank is required")
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Rank must be a positive number",
    }),
  percentile: z
    .string()
    .min(1, "Percentile is required")
    .refine(
      (val) => !isNaN(Number(val)) && Number(val) >= 0 && Number(val) <= 100,
      {
        message: "Percentile must be between 0 and 100",
      }
    ),
  score: z
    .string()
    .min(1, "Score is required")
    .refine(
      (val) => !isNaN(Number(val)) && Number(val) >= 0 && Number(val) <= 15,
      {
        message: "Score must be between 0 and 15",
      }
    ),
});

type FormValues = z.infer<typeof formSchema>;

const UpdateForm = ({
  isOpen,
  onClose,
  onSubmit,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: FormValues) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const handleFormSubmit = (data: FormValues) => {
    onSubmit(data);
    reset();
    onClose();
  };

  const formFields = [
    { label: "Rank", name: "rank" as const },
    { label: "Percentile", name: "percentile" as const },
    { label: "Current Score (out of 15)", name: "score" as const },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-4">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold">Update Scores</h2>
          <Image className="w-8 h-8" src={html_icon} alt="" />
        </div>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
          {formFields.map((field, index) => (
            <div key={field.name} className="flex justify-between items-start">
              <label className="flex items-center text-xs md:text-base">
                <span className="bg-blue-700 mr-4 w-6 h-6 flex justify-center items-center p-1 rounded-full text-white">
                  {index + 1}
                </span>
                Update your
                <span className="font-semibold ml-1">{field.label}</span>
              </label>
              <div className="flex flex-col">
                <input
                  {...register(field.name)}
                  className="border justify-end w-[5rem] md:w-[10rem] p-2 rounded-lg border-gray-300 focus:border-blue-200 outline-none"
                />
                {errors[field.name] && (
                  <p className="text-red-500 text-sm">
                    {errors[field.name]?.message}
                  </p>
                )}
              </div>
            </div>
          ))}
          <div className="flex justify-end space-x-2 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-600 text-sm flex"
            >
              Save
              <FaLongArrowAltRight className="text-sm mt-[0.2rem] ml-4" />
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default function Home() {
  const totalScore = 15;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [values, setValues] = useState<FormValues>({
    rank: "4",
    percentile: "90",
    score: "4",
  });

  const handleSubmit = (data: FormValues) => {
    setValues(data);
  };

  return (
    <div className="text-black pb-10">
      <Header />
      <div className="flex flex-col md:flex-row justify-between">
        <NavBar />
        <MobileNavbar />
        <div className="md:pl-16 flex flex-col space-y-4 w-full md:w-2/3 px-2">
          <h3 className="mt-6 text-lg font-semibold items-start ml-2 md:ml-0">
            Skill Test
          </h3>
          <div className="flex flex-col space-y-4 items-center">
            <Info onUpdate={() => setIsModalOpen(true)} />
            <QuickStat
              rank={values.rank}
              percentile={values.percentile}
              score={values.score}
            />
            <PercentileChart percentile={Number(values.percentile)} />
          </div>
        </div>
        <div className="w-full md:w-[30%] px-4 mt-4 md:mt-12 md:p-4 space-y-5">
          <SyllabusAnalysis />
          <DonutChart correct={Number(values.score)} total={totalScore} />
        </div>
      </div>
      <UpdateForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { LiaDollarSignSolid } from "react-icons/lia";
import { RxArrowBottomLeft, RxArrowTopRight } from "react-icons/rx";

interface TransactionData {
  friend: string;
  transactionType: string;
  amount: number;
  description: string;
}

const AddTransactionForm = ({closeOverlay}:{closeOverlay: () => void}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<TransactionData>();

  const addTransactionHandler = async (data: TransactionData) => {
    console.log(data);

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(addTransactionHandler)}
      className="flex flex-col gap-4"
    >
      <div className="flex flex-col">
        <label htmlFor="friend" className="font-medium text-lg">
          Friend
        </label>
        <div className="border border-gray-300 p-1 rounded-md focus-within:border-2 focus-within:border-blue-500 mt-1">
          <input
            type="text"
            placeholder="John"
            {...register("friend", {
              required: "Friend is required",
            })}
            className="focus:outline-none w-full"
          />
        </div>

        {errors.friend && (
          <span className="text-sm text-red-600">{errors.friend.message}</span>
        )}
      </div>

      <div className="flex flex-col">
        <label htmlFor="transactionType" className="font-medium text-lg">
          Transaction Type
        </label>

        <div className="flex space-x-5 mt-1">
          <div>
            <input
              type="radio"
              id="borrowed"
              value="borrowed"
              {...register("transactionType")}
              className="hidden"
            />
            <label
              htmlFor="borrowed"
              className={`flex items-center border border-gray-300 cursor-pointer rounded-xl px-3 py-1 w-fit ${
                watch("transactionType") === "borrowed"
                  ? "bg-red-600 text-white"
                  : ""
              }`}
            >
              <RxArrowBottomLeft className="mr-1" /> Borrowed
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="lent"
              value="lent"
              {...register("transactionType")}
              className="hidden"
            />
            <label
              htmlFor="lent"
              className={`flex items-center border border-gray-300 cursor-pointer rounded-xl  px-3 py-1  w-fit ${
                watch("transactionType") === "lent"
                  ? "bg-green-600 text-white"
                  : ""
              }`}
            >
              <RxArrowTopRight className="mr-1" />
              Lent
            </label>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="amount" className="font-medium text-lg">
          Amount
        </label>
        <div className="flex items-center border border-gray-300 p-1 rounded-md focus-within:border-2 focus-within:border-blue-500 mt-1">
          <LiaDollarSignSolid />
          <input
            type="number"
            {...register("amount")}
            className="focus:outline-none w-full"
            placeholder="0.00"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="description" className="font-medium text-lg">
          Description
        </label>
        <textarea
          id="description"
          rows={4}
          {...register("amount", {
            maxLength: {
              value: 100,
              message: "Description cannot be more than 100 character",
            },
          })}
          className="border border-gray-300 p-1 rounded-md focus-within:border-2 focus:outline-none focus:border-blue-500 mt-1"
          placeholder="What was this for?"
        />
      </div>

      <div className="flex justify-end space-x-3">
        <button
          className="cursor-pointer p-2 rounded-lg border border-gray-300 hover:bg-gray-300 transform hover:scale-105"
          type="button"
          onClick={closeOverlay}
        >
          Cancel
        </button>
        <button
          className="cursor-pointer p-2 rounded-lg text-white bg-blue-500 hover:bg-blue-400 transform hover:scale-105"
          type="submit"
        >
          {isSubmitting ? "Saving Transaction..." : "Save Transaction"}
        </button>
      </div>
    </form>
  );
};

export default AddTransactionForm;

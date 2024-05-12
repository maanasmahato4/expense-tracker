import React from "react";
import LandingPageButton from "@/components/buttons/landingpage-button";

function LandingPage() {
  return (
    <div className="h-screen flex flex-col">
      <div className="p-4 flex flex-row justify-between items-center">
        <h3 className="text-2xl font-bold text-purple-500">DevExpense</h3>
        <LandingPageButton
          variant="outline"
          className="text-purple-500"
          path="/dashboard"
        >
          Get Started
        </LandingPageButton>
      </div>
      <div className="flex-grow flex flex-col gap-y-8 items-center justify-center">
        <div className="text-center flex flex-col gap-y-4">
          <h1 className="text-5xl font-bold">Manage Your Expenses</h1>
          <h3 className="text-4xl font-semibold">Control Your Money</h3>
          <p className="font-semibold">
            Start Creating Your budget to save your money.
          </p>
        </div>
        <LandingPageButton
          variant="default"
          className="px-8 py-4"
          path="/dashboard"
        >
          Get Started
        </LandingPageButton>
      </div>
    </div>
  );
}

export default LandingPage;

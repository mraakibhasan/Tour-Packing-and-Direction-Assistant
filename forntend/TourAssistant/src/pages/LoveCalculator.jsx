import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import NavBar from "../components/NavBar";

const LoveCalculator = () => {
    const [result, setResult] = useState("");

    const getLoveAdvice = (lovePercentage) => {
        const advice = [
            "💔 Relationships have bumps! Diamonds are made under pressure, so take a deep breath, give it time, and laugh through the chaos. You’ll probably make it—as long as you don’t kill each other first! 😅",
            "😅 Early days? Relax! Relationships are like coffee—they need time to brew. Maybe you’re the universe’s quirky opposites. Embrace the awkwardness, laugh, and just go with it. After all, you’re basically dating a meme!",
            "❤️ Starting to click? It’s like IKEA furniture—slow but rewarding. Share shows, memes, and pizza. Don’t overthink it; just enjoy the ride and make room for snacks along the way!",
            "😍 Vibing like PB&J? Time for a shared hobby—knitting, pottery, or even birdwatching. You’ll learn a lot or just laugh at yourselves. Either way, keep that groove going strong!",
            "💖 Feeling solid? Surprise each other—a dance party or a fun scavenger hunt. Keep the spark alive, even if it’s over dishes in the sink. It’s about fun and connection!",
            "🔥 You’re on fire! Plan romantic surprises but keep it safe—maybe have a fire extinguisher handy. Passion’s great, but date nights and laughter keep it balanced!",
            "💍 Practically soulmates? Finish each other’s sentences, share inside jokes, and keep building the connection. Just don’t let blanket wars ruin the magic!",
            "🌹 Love is in the air! Talk dreams, goals, and pizza toppings. Serious chats are fine as long as you’re laughing. When it’s real, humor keeps it strong!",
            "✨ Soulmate level! You’re better together. Plan unexpected fun—like a grocery store trip—and bond over small moments. Even toilet paper can be romantic!",
            "💫 Perfect match! Like fries and ketchup, you’re inseparable. Support each other, even on silly things like pineapple pizza debates. True love grows through shared laughs and queues!"
        ];

        const index = Math.floor(lovePercentage / 10);
        return advice[Math.min(index, advice.length - 1)];
    };

    const loveCalculator = (yourName, partnerName) => {
        if (!yourName || !partnerName) {
            return "Please provide both names.";
        }

        yourName = yourName.trim().toLowerCase();
        partnerName = partnerName.trim().toLowerCase();
        const combinedNames = yourName < partnerName ? yourName + partnerName : partnerName + yourName;

        let hash = 0;
        for (let i = 0; i < combinedNames.length; i++) {
            hash += combinedNames.charCodeAt(i) * (i + 1);
        }

        const lovePercentage = hash % 101;
        const advice = getLoveAdvice(lovePercentage);

        return { lovePercentage, advice };
    };

    const initialValues = {
        yourName: "",
        partnerName: "",
    };

    const validationSchema = Yup.object({
        yourName: Yup.string()
            .required("Your name is required")
            .max(50, "Name must be less than 50 characters"),
        partnerName: Yup.string()
            .required("Partner's name is required")
            .max(50, "Name must be less than 50 characters"),
    });

    const onSubmit = (values, { setSubmitting }) => {
        const { yourName, partnerName } = values;
        const { lovePercentage, advice } = loveCalculator(yourName, partnerName);
        setResult({ lovePercentage, advice });
        setSubmitting(false);
    };

    return (
        <div className="h-screen w-screen flex flex-col" style={{ fontFamily: '"Caveat", cursive' }}>
            <NavBar />
            <div className="flex flex-1 bg-red-100">
                {/* Left Section */}
                <div className="flex-1 flex items-center justify-center bg-pink-300 p-6">
                    {result ? (
                        <div className="text-3xl font-semibold text-center text-gray-800">
                            <p className="mb-4" style={{ color: "red", fontSize: "2.5rem" }}>
                                {result.lovePercentage}%
                            </p>{" "}
                            <span style={{ fontFamily: '"Dancing Script", cursive' }}>
                                {result.advice}
                            </span>
                        </div>
                    ) : (
                        <div className="text-xl font-medium text-gray-600 text-center">
                            Enter your names to calculate your love compatibility! ❤️
                        </div>
                    )}
                </div>

                {/* Right Section */}
                <div className="flex-1 flex items-center justify-center p-6">
                    <div className="w-full max-w-md p-6">
                        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
                            Love Calculator 💕
                        </h1>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    {/* Your Name Field */}
                                    <div className="mb-6">
                                        <label
                                            htmlFor="yourName"
                                            className="block text-gray-700 text-lg font-semibold mb-2"
                                        >
                                            Your Name --
                                        </label>
                                        <Field
                                            type="text"
                                            id="yourName"
                                            name="yourName"
                                            placeholder="Enter your name"
                                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 text-lg"
                                        />
                                        <ErrorMessage
                                            name="yourName"
                                            component="div"
                                            className="text-sm text-red-500 mt-2"
                                        />
                                    </div>

                                    {/* Partner's Name Field */}
                                    <div className="mb-6">
                                        <label
                                            htmlFor="partnerName"
                                            className="block text-gray-700 text-lg font-semibold mb-2"
                                        >
                                            Partner's Name --
                                        </label>
                                        <Field
                                            type="text"
                                            id="partnerName"
                                            name="partnerName"
                                            placeholder="Enter partner's name"
                                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 text-lg"
                                        />
                                        <ErrorMessage
                                            name="partnerName"
                                            component="div"
                                            className="text-sm text-red-500 mt-2"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <div className="text-center">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="bg-red-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-pink-600 focus:ring-2 focus:ring-pink-400 focus:outline-none"
                                        >
                                            Calculate Love ❤️
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoveCalculator;

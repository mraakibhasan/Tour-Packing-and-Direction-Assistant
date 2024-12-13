import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import NavBar from "../components/NavBar";

const LoveCalculator = () => {
    const [result, setResult] = useState("");

    const getLoveAdvice = (lovePercentage) => {
        const advice = [
            "💔 Things might be a little rocky right now, but hey, all great relationships have their bumps! Just remember, even diamonds are made under pressure. Take a deep breath, give it time, and don’t worry—you’ll probably get through it as long as you don’t kill each other first. 😅",

            "😅 It's still early days, so don’t panic! Relationships are like coffee—sometimes they need time to brew. Who knows? Maybe you’re just the two weirdo opposites the universe is rooting for. Hang in there, and don’t forget to laugh at the awkward moments. You’re basically dating a meme right now!",

            "❤️ You're starting to click! It's like putting together IKEA furniture—slow at first, but eventually, you’ll figure it out (hopefully). Keep sharing your favorite shows, funny memes, and maybe a pizza or two. Things are looking good, so don’t overthink it! Just enjoy the ride, and don't forget the snacks!",

            "😍 You two are really vibing now! Like peanut butter and jelly, you’ve found your groove. Time to take things to the next level—maybe start a weird hobby together like knitting, pottery, or birdwatching. You’ll learn a lot about each other... or just laugh at how bad you are at it!",

            "💖 Things are looking solid! Now’s the perfect time to throw in some surprises—like a random dance party in the living room, or a scavenger hunt to find who left the dishes in the sink. It’s all about keeping the spark alive, even if that spark is just trying not to kill each other over chores.",

            "🔥 You two are on fire! Keep it up with spontaneous surprises and keep doing what you're doing. Just don't accidentally set the house on fire with all that passion. Maybe plan a romantic date night, but also make sure you have a fire extinguisher nearby—just in case things get too hot!",

            "💍 You two are practically soulmates! At this point, you’re probably finishing each other’s sentences, and maybe you’ve even started making inside jokes about the way one of you eats cereal. Keep building that deep connection, because you two are headed toward something great... unless one of you steals the blankets.",

            "🌹 Love is definitely in the air! It might be time to take things up a notch—talk about your dreams, your goals, and what kind of pizza toppings you actually hate. But hey, serious stuff doesn’t mean you can’t joke around. Just make sure you’re still laughing when things get too real!",

            "✨ You’ve reached soulmate status! By now, you’ve probably realized that you’re way better together than apart. But hey, don’t let that stop you from having fun! Plan a trip to somewhere unexpected, like the grocery store—because there’s no better way to bond than over the last pack of toilet paper!",

            "💫 Perfect match! You two are like fries and ketchup—impossible to separate, and frankly, a little bit magical. Keep supporting each other through everything, even the small stuff like whether or not pineapple belongs on pizza. Remember, true love is about growing together, even if you’re just growing your Netflix queues."
        ];


        const index = Math.floor(lovePercentage / 10); // Get advice based on love percentage
        return advice[Math.min(index, advice.length - 1)];
    };

    const loveCalculator = (yourName, partnerName) => {
        if (!yourName || !partnerName) {
            return "Please provide both names.";
        }

        yourName = yourName.trim().toLowerCase();
        partnerName = partnerName.trim().toLowerCase();
        const combinedNames =
            yourName < partnerName ? yourName + partnerName : partnerName + yourName;

        let hash = 0;
        for (let i = 0; i < combinedNames.length; i++) {
            hash += combinedNames.charCodeAt(i) * (i + 1);
        }

        const lovePercentage = hash % 101;
        const advice = getLoveAdvice(lovePercentage); // Get advice based on love percentage

        return `💖 The love compatibility between ${yourName} and ${partnerName} is ${lovePercentage}%! ${advice}`;
    };


    // Formik Setup
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
        const loveMessage = loveCalculator(yourName, partnerName);
        setResult(loveMessage);
        setSubmitting(false);
    };

    return (
        <div>
            <NavBar></NavBar>
            <div>
                <div className="min-h-screen flex items-center justify-center bg-red-100">
                    <div className="p-6 rounded-lg shadow-md w-[500px] bg-pink-400">
                        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
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
                                    <div className="mb-4">
                                        <label
                                            htmlFor="yourName"
                                            className="block text-gray-700 font-semibold mb-2"
                                        >
                                            Your Name
                                        </label>
                                        <Field
                                            type="text"
                                            id="yourName"
                                            name="yourName"
                                            placeholder="Enter your name"
                                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                                        />
                                        <ErrorMessage
                                            name="yourName"
                                            component="div"
                                            className="text-sm text-red-500 mt-1"
                                        />
                                    </div>

                                    {/* Partner's Name Field */}
                                    <div className="mb-4">
                                        <label
                                            htmlFor="partnerName"
                                            className="block text-gray-700 font-semibold mb-2"
                                        >
                                            Partner's Name
                                        </label>
                                        <Field
                                            type="text"
                                            id="partnerName"
                                            name="partnerName"
                                            placeholder="Enter partner's name"
                                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                                        />
                                        <ErrorMessage
                                            name="partnerName"
                                            component="div"
                                            className="text-sm text-red-500 mt-1"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <div className="text-center">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="bg-red-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-pink-600 focus:ring-2 focus:ring-pink-400 focus:outline-none"
                                        >
                                            Calculate Love ❤️
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>

                        {/* Result Output */}
                        {result && (
                            <div className="mt-6 p-4 bg-pink-100 border border-pink-300 text-pink-700 rounded-md text-center">
                                {result}
                            </div>
                        )}
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>

    );
};

export default LoveCalculator;

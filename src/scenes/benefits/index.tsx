import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ea commodi veritatis officia magnam adipisci, "
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100'2 of Diverse Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ea commodi veritatis officia magnam adipisci, "
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "100'2 of Diverse Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ea commodi veritatis officia magnam adipisci, "
    },
]

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
}

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section
            id="benefits"
            className="mx-auto min-h-full w-5/6 py-20">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            >
                {/* HEADER */}
                <motion.div
                    className="md:my-5 md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <HText>MORE THAN JUST A GYM</HText>
                    <p className="my-5 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ea commodi veritatis officia magnam adipisci, consequatur aspernatur perspiciatis quas obcaecati deserunt aliquam vel. Tenetur voluptas aut beatae. Quasi, modi atque?
                    </p>
                </motion.div>
                {/* BENEFITS */}
                <motion.div
                    className="items-center justify-between gap-8 mt-5 md:flex"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    {benefits.map((benefit: BenefitType) => (
                        <Benefit
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage}
                        />
                    ))}
                </motion.div>
                {/* GRAPHICS AND DESCRIPTION */}
                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                    {/* GRAPHIC */}
                    <img
                        className="mx-auto"
                        alt="benefits-page-graphic"
                        src={BenefitsPageGraphic}
                    />
                    {/* DESCRIPTION */}
                    <div>
                        {/* TITLE */}
                        <div

                        >
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves"></div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, x: 50 },
                                    visible: { opacity: 1, x: 0 }
                                }}
                            >
                                <HText>
                                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                    <span className="text-primary-500">FIT</span>
                                </HText>
                            </motion.div>
                        </div>
                        {/* DESCRIPT */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 }
                            }}
                        >
                            <p className="my-5">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis enim laudantium sint adipisci molestias et autem facere est numquam possimus qui saepe nobis ducimus assumenda ipsam modi, ea nulla libero.</p>
                            <p className="mb-5">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, aspernatur? Corporis harum consequatur dolor doloribus assumenda consectetur maxime vel quibusdam? Expedita illo modi voluptatum a dignissimos dolor provident quibusdam pariatur!</p>
                        </motion.div>
                        {/* BUTTON */}
                        <div className="relative mt-16">
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                <ActionButton setSelectedPage={setSelectedPage}>
                                    Join Now
                                </ActionButton>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Benefits
import React from 'react'
import "./Hero.css"
// import HiLocationMarket from 'react-icons/hi'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'
const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWith hero-container flexCenter">
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="orange-circle">

                        </div>
                        <motion.h1
                            initial={{ y: "2rem", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 2,
                                type: "string"
                            }}>Discover <br />
                            Most Suitable <br />
                            Property</motion.h1>

                    </div>
                    <div className="flexColStart hero-des">
                        <span className='secondaryText'>
                            Find a variety of properties that suit you very easily
                        </span>
                        <span className='secondaryText'>
                            Forget all difficulties in finding a residence for you
                        </span>
                    </div>
                    <div className="flexCenter search-bar">
                        {/* <HiLocationMarket color="var(-blue)" size={25} /> */}
                        <input type="text" />
                        <button className='button'>Search</button>
                    </div>
                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={8800} end={9000} duration={4} />
                                <span>+</span>
                            </span>

                            <span className='secondaryText'>
                                Premium Product
                            </span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={1950} end={2000} duration={4} />
                                <span>+</span>
                            </span>

                            <span className='secondaryText'>
                                Happy Customer
                            </span>
                        </div>

                        <div className="flexColCenter stat">
                            <span>
                                <CountUp end={28} />
                                <span>+</span>
                            </span>

                            <span className='secondaryText'>
                                Award Winning
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flexCenter hero-right">
                    <motion.div className="image-container"
                        initial={{ x: "7rem", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2, type: "string" }}>
                        <img src="../../../public/hero-image.png" alt="" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero
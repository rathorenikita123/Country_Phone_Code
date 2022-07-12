import React, { useState, useEffect, useRef } from "react";
import countries from "./data";
import arrow from "./arrow.png";
import "./Phone.css";

const Phone = () => {

    const [country, setCountry] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const [state, setState] = useState([]);
    const ref = useRef();

    useEffect(() => {
        setCountry(countries);
    }, []);

    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (isActive && ref.current && !ref.current.contains(e.target)) {
                setIsActive(false)
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isActive])

    return (
        <div className="dropdown" >
            <div className="container">
                {/* <div className="phone-container">
                    <h6> Phone Number</h6>
                </div> */}
                <div className="content" >
                    <div className="b-button" ref={ref}>
                        <button className="dropdown-btn " onClick={() => setIsActive(oldState => !oldState)}>
                            {state.length === 0 ? "Country" : (
                                <>
                                    <img src={state.image} alt="img" width={20} height={20} />
                                    <p> {state.code}</p>
                                </>
                            )}
                            <i className='downArrow'>
                                <img className='Arrow' src={arrow} alt="img" />
                            </i>
                        </button>
                        {isActive && (
                            <div className="dropdown-container">
                                <div className="dropdown-content">
                                    {country.map((country) => {
                                        return (
                                            <div className="dropdown-item " key={country.id} onClick={() => setState({ image: country.image, code: country.code })}>
                                                <div className="items">
                                                    <img src={country.image} alt={country.name} width={20} height={20} />
                                                    <p>{country.code}</p>
                                                </div>
                                            </div>
                                        );
                                    }
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="phone_num">
                        <input type="text" id="phone" placeholder="Enter your phone number" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Phone;


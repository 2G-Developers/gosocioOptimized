import React, { useState } from 'react'

const Dropdown = ({setdropdownValue,dropdownValue}) => {
    const [dropdownToggle, setDropdownToggle] = useState(false);

    function onDropdownData(e) {
        let value = e.target.dataset['value']
        if(value) {
            setdropdownValue(value)
        }
        setDropdownToggle(prevState => !prevState)
    }

    return (
        <div className="dropdown__select" style={{borderBottom: "1px solid #cbcbcb"}}>
            {/* eslint-disable-next-line */
                                    }<div className="dropdown__form-group" onClick={() => setDropdownToggle(prevState => !prevState)}>
                <input type="text" className="dropdown__input" value={dropdownValue} disabled placeholder="Job Role" />
                <div className={`arrow ${dropdownToggle ? 'arrow--rotate':''}`}>
                    <svg width="10" height="10" viewBox="0 0 39 23" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M1.00386 0.806505C1.25887 0.555802 1.56084 0.35787 1.89247 0.22405C2.22409 0.0902293 2.57887 0.0231516 2.93646 0.0266518C3.29405 0.030152 3.64744 0.104161 3.97638 0.244448C4.30533 0.384734 4.60336 0.588538 4.85342 0.844186L19.0995 15.3774L33.6273 1.12583C33.8825 0.875538 34.1846 0.67797 34.5162 0.544406C34.8478 0.410843 35.2024 0.343898 35.5599 0.347397C35.9173 0.350896 36.2706 0.42477 36.5995 0.564799C36.9285 0.704827 37.2266 0.90827 37.4769 1.16351C37.7272 1.41875 37.9247 1.72079 38.0583 2.05238C38.1918 2.38398 38.2588 2.73863 38.2553 3.0961C38.2518 3.45356 38.1779 3.80684 38.0379 4.13575C37.8979 4.46467 37.6944 4.76278 37.4392 5.01308L20.9678 21.1651C20.7128 21.4158 20.4108 21.6138 20.0792 21.7476C19.7476 21.8814 19.3928 21.9485 19.0352 21.945C18.6776 21.9415 18.3242 21.8675 17.9953 21.7272C17.6663 21.5869 17.3683 21.3831 17.1182 21.1275L0.966176 4.65607C0.715473 4.40106 0.517543 4.09909 0.383722 3.76746C0.249901 3.43583 0.18282 3.08106 0.18632 2.72347C0.18982 2.36588 0.263833 2.01249 0.40412 1.68354C0.544406 1.3546 0.748209 1.05656 1.00386 0.806505V0.806505Z" fill="#eb4d37"/>
                    </svg>
                </div>
            </div>
            {/* eslint-disable-next-line */
                                    }<div className={`dropdown__options ${dropdownToggle ? 'dropdown__options--show':''}`} onClick={onDropdownData}>
                <div className="dropdown__option" data-value="Content">Content</div>
                <div className="dropdown__option" data-value="Creative">Creative</div>
                <div className="dropdown__option" data-value="SEO">SEO</div>
                <div className="dropdown__option" data-value="Social Media">Social Media</div>
                <div className="dropdown__option" data-value="Development">Developer</div>
                <div className="dropdown__option" data-value="Other">Other</div>
            </div>
        </div>
    )
}

export default Dropdown

import '../styles/Toggle.css';

export default function Toggle ({value, onChange}) {
    return (
        <div className='toggle-smm-land'>
                <label className='switch-toggle'>
                    <input className='switch-input' type='checkbox' checked={value} onChange={onChange} />
                    <span className='slider-btn round'></span>
                </label>
                <label>Remember me</label>
        </div>
    )
}
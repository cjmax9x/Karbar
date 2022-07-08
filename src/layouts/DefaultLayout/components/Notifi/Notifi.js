function Notifi({ className, onClick }) {
    return (
        <div style={{ textAlign: 'center', cursor: 'pointer' }} onClick={onClick} className={className}>
            Notification
            <br></br>
            <br></br>
            Đang trong quá trình phát triển
            <br></br>
            Click to Back
        </div>
    );
}

export default Notifi;

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function Pix({ pixCode, setPixCode }) {
    const [qrCodeUrl, setQrCodeUrl] = useState("");
    const [qrCodeValue, setQrCodeValue] = useState("");

    const handleGenerateQRCode = () => {
        // Gerar um valor aleatório para o QR Code
        const randomValue = Math.random().toString(36).substring(2, 15);
        const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${randomValue}&size=200x200`;
        setQrCodeUrl(qrUrl); // Atualiza o estado com a URL do QR Code
        setQrCodeValue(randomValue); // Armazena o valor do QR Code
    };

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(qrCodeValue);
        alert("Código copiado para a área de transferência!");
    };

    return (
        <div style={{ marginBottom: '20px' }}>
            <h4 className="fw-bold mb-2 text-center" style={{ background: 'linear-gradient(309deg, rgba(2,0,36,1) 0%, rgba(55,90,127,1) 80%)', borderRadius: '20px', color: 'white', fontWeight: 'bold', marginTop: '20px' ,padding:'10px' }}>
                Pagamento via Pix
            </h4>
            <div className="text-center">
                <Button
                    type="button"
                    className="btn btn-lg btn-block"
                    style={{
                        backgroundColor:'black',
                        color: 'white',
                        marginTop: '10%',
                        width: '50%',
                        marginBottom: '4px',
                        transition: 'all 0.3s ease',
                        transform: 'scale(1)',
                        border: '1px solid black',
                        borderRadius: '30px'
                    }}                            
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'white'; 
                        e.currentTarget.style.color = 'black'; 
                        e.currentTarget.style.transform = 'scale(1.1)'; 
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'black';
                        e.currentTarget.style.color = 'white';
                        e.currentTarget.style.transform = 'scale(1)'; 
                    }}
                    onClick={handleGenerateQRCode}
                >
                    Gerar QR Code
                </Button>
            </div>
            {qrCodeUrl && (
                <div className="text-center mt-4">
                    <img src={qrCodeUrl} alt="QR Code" style={{ width: '200px', height: '200px' }} />
                    <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '20px', backgroundColor: '#f9f9f9' }}>
                        <span>{qrCodeValue}</span>
                    </div>
                    <Button 
                            variant="outline-primary" 
                            style={{ marginTop: '10px' }} 
                            onClick={handleCopyToClipboard}
                        >
                            Copiar
                        </Button>
                </div>
            )}
        </div>
    );
}

export default Pix;

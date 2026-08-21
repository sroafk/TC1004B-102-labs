// src/components/CardIA.jsx
export const CardIA = ({ name, height, mass, gender }) => {
    const valueOrUnknown = (value) => value === 'unknown' || value === 'n/a' ? 'No disponible' : value;

    return (
        <div style={{ 
            border: '1px solid #d8dbe2', 
            padding: '20px', 
            margin: '10px 0', 
            borderRadius: '8px',
            backgroundColor: '#202733',
            color: '#f5f7fa',
            width: '220px',
            boxSizing: 'border-box',
            textAlign: 'left',
            boxShadow: '0 8px 18px rgba(15, 23, 42, 0.16)'
        }}>
            <h3 style={{ margin: '0 0 16px', color: '#ffe81f' }}>{name}</h3>
            <p><strong>Altura:</strong> {valueOrUnknown(height)} cm</p>
            <p><strong>Peso:</strong> {valueOrUnknown(mass)} kg</p>
            <p><strong>Género:</strong> {valueOrUnknown(gender)}</p>
        </div>
    );
}
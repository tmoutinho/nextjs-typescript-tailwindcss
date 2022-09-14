const Layout = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '100px 1fr',
        gridTemplateRows: '50px 1fr',
        gridTemplateAreas: `
          "sidebar header" 
          "sidebar main"
        `,
        height: '300px',
      }}
    >
      <div
        style={{
          gridArea: 'sidebar',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ gridArea: 'sidebar', display: 'grid', gap: '8px' }}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        <div>4</div>
      </div>
      <div
        style={{
          gridArea: 'header',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 15px',
        }}
      >
        <div>Dropdown</div>
        <div>Menu</div>
      </div>
      <div style={{ gridArea: 'main' }}>content</div>
    </div>
  );
};

export default Layout;

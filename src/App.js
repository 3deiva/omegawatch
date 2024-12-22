import React, { useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Monitor, Power, Map, FileText, HardDrive } from "lucide-react";

const ControlPanel = () => {
  const [displayMode, setDisplayMode] = useState("default");
  const [systemStatus, setSystemStatus] = useState({
    isRunning: false,
  });

  const renderDisplayContent = () => {
    switch (displayMode) {
      case "start":
        return (
          <div
            style={{ color: "green" }}
            className="text-center absolute top-4 right-4"
          >
            <Monitor size={32} />
            <p style={{ marginTop: "5px", fontSize: "14px" }}>Active</p>
          </div>
        );
      case "off":
        return (
          <div
            style={{ color: "red" }}
            className="text-center absolute top-4 right-4"
          >
            <Power size={32} />
            <p style={{ marginTop: "5px", fontSize: "14px" }}>Offline</p>
          </div>
        );
      case "path":
        return (
          <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <div style={{ color: "blue" }} className="absolute top-4 right-4">
              <Map size={32} />
              <p style={{ marginTop: "5px", fontSize: "14px" }}>Path View</p>
            </div>
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="./path.png"
                alt="Path"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        );
      case "reports":
        return (
          <div style={{ color: "orange" }} className="absolute top-4 right-4">
            <FileText size={32} />
            <p style={{ marginTop: "5px", fontSize: "14px" }}>Reports View</p>
          </div>
        );
      case "drive":
        return (
          <div style={{ color: "purple" }} className="absolute top-4 right-4">
            <HardDrive size={32} />
            <p style={{ marginTop: "5px", fontSize: "14px" }}>Drive Status</p>
          </div>
        );
      default:
        return null;
    }
  };

  const handleButtonClick = (mode) => {
    setDisplayMode(mode);

    if (mode === "start") {
      setSystemStatus({
        isRunning: true,
      });
    } else if (mode === "off") {
      setSystemStatus({
        isRunning: false,
      });
    }
  };

  // Button styles
  const buttonStyle = {
    marginBottom: "12px",
    height: "45px",
    fontSize: "16px",
    textTransform: "none",
  };

  return (
    <div
      style={{ display: "flex", height: "100vh", backgroundColor: "#1A202C" }}
    >
      {/* Sidebar with centered buttons */}
      <div
        style={{
          width: "200px",
          backgroundColor: "#2D3748",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "16px",
        }}
      >
        <div>
          <Button
            variant="contained"
            style={{ ...buttonStyle, backgroundColor: "#38A169" }}
            fullWidth
            onClick={() => handleButtonClick("start")}
          >
            <Monitor style={{ marginRight: "8px" }} size={20} /> Start
          </Button>
          <Button
            variant="contained"
            style={{ ...buttonStyle, backgroundColor: "#E53E3E" }}
            fullWidth
            onClick={() => handleButtonClick("off")}
          >
            <Power style={{ marginRight: "8px" }} size={20} /> Stop
          </Button>
          <Button
            variant="contained"
            style={{ ...buttonStyle, backgroundColor: "#3182CE" }}
            fullWidth
            onClick={() => handleButtonClick("path")}
          >
            <Map style={{ marginRight: "8px" }} size={20} /> Show Path
          </Button>
          <Button
            variant="contained"
            style={{ ...buttonStyle, backgroundColor: "#D69E2E" }}
            fullWidth
            onClick={() => handleButtonClick("reports")}
          >
            <FileText style={{ marginRight: "8px" }} size={20} /> Reports
          </Button>
          <Button
            variant="contained"
            style={{ ...buttonStyle, backgroundColor: "#9B2C2C" }}
            fullWidth
            onClick={() => handleButtonClick("drive")}
          >
            <HardDrive style={{ marginRight: "8px" }} size={20} /> Drive
          </Button>
        </div>
      </div>

      {/* Main Panel */}
      <div style={{ flexGrow: 1 }}>
        <Card style={{ width: "100%", height: "100%", borderRadius: 0 }}>
          <CardContent
            style={{
              height: "100%",
              backgroundColor: "black",
              color: "white",
              padding: 0,
              position: "relative",
            }}
          >
            {renderDisplayContent()}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ControlPanel;

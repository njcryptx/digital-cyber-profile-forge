
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { AlertTriangle, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cyber-dark p-6">
      <div className="cyber-panel max-w-md relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-cyber-red"></div>
        
        <div className="text-center p-6">
          <div className="w-16 h-16 rounded-full bg-cyber-dark/70 border-2 border-cyber-red flex items-center justify-center mx-auto mb-4">
            <AlertTriangle size={32} className="text-cyber-red" />
          </div>
          
          <h1 className="text-4xl font-futura font-bold mb-2 text-cyber-red">ERROR 404</h1>
          <h2 className="text-xl mb-4 text-cyber-light">ACCESS DENIED</h2>
          
          <div className="mb-6 p-4 bg-cyber-dark/50 border border-cyber-red/30 text-sm text-cyber-light/70">
            <p className="font-cyber">
              <span className="text-cyber-red">!WARNING: </span>
              The resource at <span className="text-cyber-blue">{location.pathname}</span> could not be located.
            </p>
            <p className="mt-2">System breach attempt has been logged.</p>
          </div>
          
          <Link
            to="/"
            className="cyber-button inline-flex items-center"
            onMouseEnter={() => window.playSound?.('hover')}
            onClick={() => window.playSound?.('click')}
          >
            <ArrowLeft size={16} className="mr-2" />
            <span>RETURN TO SECURE AREA</span>
          </Link>
        </div>
        
        <div className="h-10 bg-cyber-dark/30 border-t border-cyber-red/20 flex items-center justify-center text-xs text-cyber-light/50">
          <span className="font-cyber animate-text-flicker">SYSTEM: Route not found in navigation matrix</span>
        </div>
      </div>
    </div>
  );
};

export default NotFound;


import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Cyberpunk theme colors
				cyber: {
					purple: '#8B5CF6',
					blue: '#0EA5E9',
					green: '#10B981',
					red: '#EA384C',
					dark: '#1A1F2C',
					light: '#D6BCFA',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'glitch': {
					'0%': {
						transform: 'translate(0)',
					},
					'20%': {
						transform: 'translate(-2px, 2px)',
					},
					'40%': {
						transform: 'translate(-2px, -2px)',
					},
					'60%': {
						transform: 'translate(2px, 2px)',
					},
					'80%': {
						transform: 'translate(2px, -2px)',
					},
					'100%': {
						transform: 'translate(0)',
					},
				},
				'scanner': {
					'0%, 100%': {
						transform: 'translateY(0%)',
						opacity: '0',
					},
					'50%': {
						transform: 'translateY(100%)',
						opacity: '0.8',
					},
				},
				'flicker': {
					'0%, 100%': {
						opacity: '1',
					},
					'50%': {
						opacity: '0.8',
					},
				},
				'text-flicker': {
					'0%, 100%': {
						opacity: '1',
					},
					'33%': {
						opacity: '0.9',
					},
					'66%': {
						opacity: '0.8',
					},
				},
				'pulse-glow': {
					'0%, 100%': {
						opacity: '1',
						boxShadow: '0 0 10px 0px rgba(139, 92, 246, 0.8)',
					},
					'50%': {
						opacity: '0.8',
						boxShadow: '0 0 20px 5px rgba(139, 92, 246, 0.8)',
					},
				},
				'loading-bar': {
					'0%': {
						width: '0%',
					},
					'100%': {
						width: '100%',
					},
				},
				'rotate-3d': {
					'0%': {
						transform: 'rotateY(0deg)',
					},
					'100%': {
						transform: 'rotateY(360deg)',
					},
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glitch': 'glitch 0.5s linear infinite',
				'glitch-hover': 'glitch 0.3s linear',
				'scanner': 'scanner 3s linear infinite',
				'flicker': 'flicker 2s linear infinite',
				'text-flicker': 'text-flicker 3s linear infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'loading-bar': 'loading-bar 3s forwards',
				'rotate-3d': 'rotate-3d 5s linear infinite',
			},
			backgroundImage: {
				'cyber-grid': "linear-gradient(rgba(26, 31, 44, 0.95) 1px, transparent 1px), linear-gradient(90deg, rgba(26, 31, 44, 0.95) 1px, transparent 1px)",
			},
			fontFamily: {
				'cyber': ['Share Tech Mono', 'monospace'],
				'futura': ['Rajdhani', 'sans-serif'],
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

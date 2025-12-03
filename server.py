#!/usr/bin/env python3
"""
Simple HTTP Server for ATG Website
Runs website on http://localhost:8080
"""

import http.server
import socketserver
import os
from pathlib import Path

PORT = 8080
WEB_ROOT = r"C:\Users\ASUS\Desktop\atg-deploy"

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=WEB_ROOT, **kwargs)
    
    def log_message(self, format, *args):
        print(f"[{self.log_date_time_string()}] {format % args}")

# Check if web root exists
if not os.path.isdir(WEB_ROOT):
    print(f"ERROR: Web root not found: {WEB_ROOT}")
    exit(1)

# Change to web directory
os.chdir(WEB_ROOT)

# Create server
with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
    print("=" * 50)
    print("ATG Website Server")
    print("=" * 50)
    print(f"Serving files from: {WEB_ROOT}")
    print(f"Server running at: http://localhost:{PORT}")
    print(f"Share with others: http://<YOUR_IP>:{PORT}")
    print("=" * 50)
    print("Press Ctrl+C to stop")
    print("=" * 50)
    
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
        exit(0)

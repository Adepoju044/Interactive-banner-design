# Interactive Banner Design

This project is built using **React 19** with **Vite**, **Tailwind CSS v4**, and **Radix UI**, allowing users to dynamically customize a banner. The customization includes:

✅ **Live preview of changes** (Text, Background Color, and Image).  
✅ **Image fits properly inside a square container** with smooth background blending.  
✅ **Text wraps and scrolls inside the banner when long**.  
✅ **Fully responsive for both desktop and mobile**.  
✅ **Unit-tested with Vitest and React Testing Library**.

---

## **🚀 Tools & Technologies Used**

| Tool                      | Version | Purpose                        |
| ------------------------- | ------- | ------------------------------ |
| **Vite**                  | Latest  | Fast development build tool    |
| **React**                 | 19      | Component-based UI library     |
| **Tailwind CSS**          | v4      | Utility-first CSS framework    |
| **Radix UI**              | Latest  | Accessible UI primitives       |
| **Vitest**                | Latest  | Unit testing framework         |
| **React Testing Library** | Latest  | Testing component interactions |

---

## **📂 Project Structure**

```
src/
├── assets/
│   ├── placeholder.png   # Default image for banner
├── components/
│   ├── Banner.jsx  # Main component
├── App.jsx
├── main.jsx
├── styles/
│   ├── index.css
├── tests/
│   ├── Banner.test.jsx  # Unit tests
```

---

## **🔧 Installation & Setup**

### **1️⃣ Clone the Repository**

```sh
git clone https://github.com/Adepoju044/Interactive-banner-design.git
cd interactive-banner-design
```

### **2️⃣ Install Dependencies**

```sh
npm install
```

### **3️⃣ Run the Application**

Start the development server:

```sh
npm run dev
```

The application will be available at **`http://localhost:5173`**.

---

## **🛠️ Features & How It Works**

### **🏷️ Banner Customization**

-   **Edit text**: Enter custom text in the text field.
-   **Change background color**: Select a color from the color picker.
-   **Upload image**: Click "Choose file" to upload an image.
-   **Remove image**: Clicking "Remove Image" resets it back to the placeholder.
-   **Instant Preview**: Click "Show Preview" to view the banner in a modal.

---

## **🧪 Running Unit Tests**

We use **Vitest** and **React Testing Library** for testing.

### **2️⃣ Run Tests**

```sh
npm run test
```

---

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

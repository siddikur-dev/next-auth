### 4. Start development server
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## 📝 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API URL | `http://localhost:5000/api` |

## 🎯 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## 🧩 Key Components

### 1. useTasks Hook (Optimistic Updates)
```javascript
// src/hooks/useTasks.js
const { tasks, createTask, updateTask, deleteTask } = useTasks(userId);
```

**Features:**
- Optimistic UI updates
- Automatic cache invalidation
- Error rollback
- Loading states

### 2. TaskForm (React Hook Form)
```javascript
// src/components/task/TaskForm.jsx
<TaskForm 
  onSubmit={handleSubmit}
  onCancel={handleCancel}
  isLoading={isCreating}
/>
```

**Features:**
- Field validation
- Error messages
- Controlled inputs

### 3. Toast Notifications
```javascript
// src/context/ToastContext.jsx
const { showToast } = useToast();
showToast('Task created successfully', 'success');
```

## 🎨 Styling

Uses **Tailwind CSS** with custom configuration:
```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: {
        500: '#3b82f6',
        600: '#2563eb',
      }
    }
  }
}
```

## 📱 Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | HomePage | Landing page |
| `/tasks` | TasksPage | Task dashboard |
| `/tasks/:id` | TaskDetailPage | Single task view |
| `/tasks/new` | CreateTaskPage | Create new task |
| `/about` | AboutPage | About page |
| `*` | NotFoundPage | 404 page |

## 🔌 API Integration

### Base Configuration
```javascript
// src/api/axios.js
baseURL: 'http://localhost:5000/api'
timeout: 10000
```

### Task API Methods
```javascript
// src/api/taskApi.js
getTasks(userId)      // GET /tasks?userId=xxx
getTask(id)           // GET /tasks/:id
createTask(data)      // POST /tasks
updateTask({id, data})// PUT /tasks/:id
deleteTask(id)        // DELETE /tasks/:id
```

## 🚀 Deployment

### Build for production
```bash
npm run build
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel --prod
```

**Environment Variables on Vercel:**
- Add `VITE_API_URL` in Vercel dashboard

## 🐛 Troubleshooting

### Issue: API calls failing
**Solution:** Check if backend is running on `http://localhost:5000`

### Issue: CORS errors
**Solution:** Backend must have CORS enabled for `http://localhost:5173`

### Issue: Tasks not loading
**Solution:** Verify `userId` in `UserContext.jsx` matches database user

### Issue: Build errors
**Solution:** Delete `node_modules` and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📚 Learn More

- [React Documentation](https://react.dev)
- [TanStack Query](https://tanstack.com/query/latest)
- [React Hook Form](https://react-hook-form.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite](https://vitejs.dev)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 👨‍💻 Author

Siddikur Rahman - siddikur.dev@gmail.com

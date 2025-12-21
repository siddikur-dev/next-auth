const { z } = require('zod');

const TaskSchema = z.object({
  title: z.string().min(1, 'Title is required').max(100),
  description: z.string().optional(),
  status: z.enum(['TODO', 'IN_PROGRESS', 'DONE']).default('TODO'),
  priority: z.enum(['LOW', 'MEDIUM', 'HIGH']).default('MEDIUM'),
  userId: z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid userId'),
});

const UpdateTaskSchema = TaskSchema.partial().omit({ userId: true });

const validateTask = (req, res, next) => {
  try {
    TaskSchema.parse(req.body);
    next();
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        errors: error.errors,
      });
    }
    next(error);
  }
};

const validateUpdateTask = (req, res, next) => {
  try {
    UpdateTaskSchema.parse(req.body);
    next();
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        errors: error.errors,
      });
    }
    next(error);
  }
};

module.exports = { validateTask, validateUpdateTask };
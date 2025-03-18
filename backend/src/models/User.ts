import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUser extends Document {
  nombre: string;
  apellido: string;
  email: string;
  password: string;
  rol: 'admin' | 'manager' | 'arbitro' | 'usuario';
  activo: boolean;
  fechaCreacion: Date;
  ultimoAcceso?: Date;
  comparePassword: (candidatePassword: string) => Promise<boolean>;
}

const UserSchema = new Schema<IUser>(
  {
    nombre: {
      type: String,
      required: [true, 'El nombre es obligatorio'],
      trim: true,
    },
    apellido: {
      type: String,
      required: [true, 'El apellido es obligatorio'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'El email es obligatorio'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Por favor ingrese un email válido'],
    },
    password: {
      type: String,
      required: [true, 'La contraseña es obligatoria'],
      minlength: [6, 'La contraseña debe tener al menos 6 caracteres'],
    },
    rol: {
      type: String,
      enum: ['admin', 'manager', 'arbitro', 'usuario'],
      default: 'usuario',
    },
    activo: {
      type: Boolean,
      default: true,
    },
    fechaCreacion: {
      type: Date,
      default: Date.now,
    },
    ultimoAcceso: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

// Hash de la contraseña antes de guardar
UserSchema.pre<IUser>('save', async function (next) {
  if (!this.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error: any) {
    next(error);
  }
});

// Método para comparar contraseñas
UserSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model<IUser>('User', UserSchema); 
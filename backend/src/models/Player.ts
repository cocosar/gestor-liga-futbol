import mongoose, { Document, Schema } from 'mongoose';

export interface IPlayer extends Document {
  nombre: string;
  apellido: string;
  fechaNacimiento?: Date;
  fotoPerfil?: string;
  numeroIdentificacion: string;
  posicion: 'indefinida' | 'portero' | 'defensa' | 'mediocampista' | 'delantero';
  numeroCamiseta?: number;
  equipo?: mongoose.Types.ObjectId;
  equiposAnteriores?: mongoose.Types.ObjectId[];
  activo: boolean;
  altura?: number; // en cm
  peso?: number; // en kg
  piePreferido?: 'izquierdo' | 'derecho' | 'ambos';
  estadisticas?: {
    goles: number;
    asistencias: number;
    tarjetasAmarillas: number;
    tarjetasRojas: number;
    partidosJugados: number;
    minutos: number;
  };
}

const PlayerSchema = new Schema<IPlayer>(
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
    fechaNacimiento: {
      type: Date,
    },
    fotoPerfil: {
      type: String,
      default: '/default-player.png',
    },
    numeroIdentificacion: {
      type: String,
      required: [true, 'El número de identificación es obligatorio'],
      unique: true,
      trim: true,
    },
    posicion: {
      type: String,
      enum: ['indefinida', 'portero', 'defensa', 'mediocampista', 'delantero'],
      required: [true, 'La posición es obligatoria'],
    },
    numeroCamiseta: {
      type: Number,
      min: [1, 'El número de camiseta debe ser al menos 1'],
      max: [99, 'El número de camiseta debe ser como máximo 99'],
    },
    equipo: {
      type: Schema.Types.ObjectId,
      ref: 'Team',
    },
    equiposAnteriores: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Team',
      },
    ],
    activo: {
      type: Boolean,
      default: true,
    },
    altura: {
      type: Number,
      min: [0, 'La altura no puede ser negativa'],
    },
    peso: {
      type: Number,
      min: [0, 'El peso no puede ser negativo'],
    },
    piePreferido: {
      type: String,
      enum: ['izquierdo', 'derecho', 'ambos'],
    },
    estadisticas: {
      goles: {
        type: Number,
        default: 0,
      },
      asistencias: {
        type: Number,
        default: 0,
      },
      tarjetasAmarillas: {
        type: Number,
        default: 0,
      },
      tarjetasRojas: {
        type: Number,
        default: 0,
      },
      partidosJugados: {
        type: Number,
        default: 0,
      },
      minutos: {
        type: Number,
        default: 0,
      },
    },
  },
  {
    timestamps: true,
  }
);

// Índices para mejorar la búsqueda
PlayerSchema.index({ apellido: 1, nombre: 1 });
PlayerSchema.index({ equipo: 1 });

export default mongoose.model<IPlayer>('Player', PlayerSchema); 
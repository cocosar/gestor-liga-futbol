import mongoose, { Document, Schema } from 'mongoose';

export interface ILeague extends Document {
  nombre: string;
  temporada: string;
  fechaInicio: Date;
  fechaFin?: Date;
  descripcion?: string;
  logo?: string;
  equipos: mongoose.Types.ObjectId[];
  estado: 'preparacion' | 'en_curso' | 'finalizada' | 'cancelada';
  tipoCompeticion: 'liga' | 'copa' | 'torneo';
  configuracion: {
    puntosPorVictoria: number;
    puntosPorEmpate: number;
    puntosPorDerrota: number;
    criteriosDesempate: string[];
  };
  creador: mongoose.Types.ObjectId;
  activo: boolean;
}

const LeagueSchema = new Schema<ILeague>(
  {
    nombre: {
      type: String,
      required: [true, 'El nombre de la liga es obligatorio'],
      unique: true,
      trim: true,
    },
    temporada: {
      type: String,
      required: [true, 'La temporada es obligatoria'],
      trim: true,
    },
    fechaInicio: {
      type: Date,
      required: [true, 'La fecha de inicio es obligatoria'],
    },
    fechaFin: {
      type: Date,
    },
    descripcion: {
      type: String,
      maxlength: [1000, 'La descripción no puede tener más de 1000 caracteres'],
    },
    logo: {
      type: String,
      default: '/default-league-logo.png',
    },
    equipos: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Team',
      },
    ],
    estado: {
      type: String,
      enum: ['preparacion', 'en_curso', 'finalizada', 'cancelada'],
      default: 'preparacion',
    },
    tipoCompeticion: {
      type: String,
      enum: ['liga', 'copa', 'torneo'],
      default: 'liga',
    },
    configuracion: {
      puntosPorVictoria: {
        type: Number,
        default: 3,
      },
      puntosPorEmpate: {
        type: Number,
        default: 1,
      },
      puntosPorDerrota: {
        type: Number,
        default: 0,
      },
      criteriosDesempate: {
        type: [String],
        default: ['diferencia_goles', 'goles_favor', 'enfrentamiento_directo'],
      },
    },
    creador: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'El creador de la liga es obligatorio'],
    },
    activo: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Índices para búsquedas más rápidas
LeagueSchema.index({ nombre: 1 });
LeagueSchema.index({ estado: 1 });
LeagueSchema.index({ tipoCompeticion: 1 });

export default mongoose.model<ILeague>('League', LeagueSchema); 
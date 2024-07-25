import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { PokemonModule } from 'src/pokemon/pokemon.module';
import { SeedController } from './seed.controller';
import { SeedService } from './seed.service';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  // importar el modulo de pokemon para poder usarlo en el seed

  imports: [PokemonModule, CommonModule],
})
export class SeedModule {}

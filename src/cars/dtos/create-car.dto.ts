import {IsInt, IsNotEmpty, IsString, Length, Max, MaxLength, Min, MinLength} from "class-validator"

export class CreateCarDTO{
    @IsString()
    model: string;

    @IsString({message: 'Brand debe ser una cadena alfabética'})
    @IsNotEmpty()
    @Length(3,20)
    brand: string;

    @IsInt()
    @Min(1900)
    @Max(2040)
    year: number
    
}
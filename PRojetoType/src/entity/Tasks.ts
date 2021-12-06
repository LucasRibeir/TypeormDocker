import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity()

export class Tasks {

    @PrimaryGeneratedColumn()

    id: number;
    
    @Column()
    title: String;
    
    @Column()
    description: String;
    
    @Column({
        default:false
    })
    finished: Boolean;

    @CreateDateColumn()
    create_ate: Date;

    @UpdateDateColumn()
    updated_at: Date;

}
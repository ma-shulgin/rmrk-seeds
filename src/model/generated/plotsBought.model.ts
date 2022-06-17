import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"

@Entity_()
export class PlotsBought {
  constructor(props?: Partial<PlotsBought>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("int4", {array: true, nullable: true})
  plotIds!: (number)[] | undefined | null

  @Index_()
  @Column_("text", {nullable: false})
  buyer!: string

  @Column_("text", {nullable: false})
  referrer!: string

  @Column_("bool", {nullable: false})
  boughtWithCredits!: boolean

  @Index_()
  @Column_("text", {nullable: false})
  txnHash!: string

  @Index_()
  @Column_("timestamp with time zone", {nullable: false})
  createdAt!: Date

  @Index_()
  @Column_("int4", {nullable: false})
  blockNumber!: number

  @Column_("text", {nullable: false})
  blockHash!: string

  @Column_("int4", {nullable: false})
  rollBlockNumber!: number

  @Index_()
  @Column_("text", {nullable: true})
  rollBlockHash!: string | undefined | null

  @Column_("text", {nullable: true})
  seed!: string | undefined | null
}

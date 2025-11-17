import {
  ArrowUpRight,
  ArrowDownRight,
  Package,
  ShoppingCart,
  Users,
  DollarSign,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Dashboard() {
  const stats = [
    {
      title: "Vendas do Mês",
      value: "R$ 12.450,00",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
    },
    {
      title: "Produtos em Estoque",
      value: "248",
      change: "-3.2%",
      trend: "down",
      icon: Package,
    },
    {
      title: "Vendas Realizadas",
      value: "87",
      change: "+8.1%",
      trend: "up",
      icon: ShoppingCart,
    },
    {
      title: "Clientes Ativos",
      value: "156",
      change: "+5.4%",
      trend: "up",
      icon: Users,
    },
  ]

  const recentSales = [
    { id: 1, product: "Betta Halfmoon Azul", customer: "João Silva", value: "R$ 45,00", date: "Hoje, 14:30" },
    { id: 2, product: "Aquário 50L Completo", customer: "Maria Santos", value: "R$ 380,00", date: "Hoje, 12:15" },
    { id: 3, product: "Ração TetraMin 200g", customer: "Pedro Costa", value: "R$ 35,00", date: "Ontem, 16:45" },
    { id: 4, product: "Filtro Externo 1000L/h", customer: "Ana Oliveira", value: "R$ 220,00", date: "Ontem, 10:20" },
  ]

  const lowStock = [
    { id: 1, product: "Ração TetraMin 200g", current: 5, min: 10 },
    { id: 2, product: "Condicionador Alcon 500ml", current: 3, min: 8 },
    { id: 3, product: "Termostato 100W", current: 2, min: 5 },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Visão geral do seu negócio de aquarismo
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((stat) => (
          <Card key={stat.title} className="bg-gradient-soft-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center text-xs">
                {stat.trend === "up" ? (
                  <ArrowUpRight className="mr-1 h-3 w-3 text-green-500" />
                ) : (
                  <ArrowDownRight className="mr-1 h-3 w-3 text-red-500" />
                )}
                <span className={stat.trend === "up" ? "text-green-500" : "text-red-500"}>
                  {stat.change}
                </span>
                <span className="ml-1 text-muted-foreground">vs mês anterior</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Recent Sales */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Vendas Recentes</CardTitle>
            <CardDescription>
              Você realizou 87 vendas este mês
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentSales.map((sale) => (
                <div key={sale.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                  <div className="flex-1">
                    <p className="text-sm font-medium">{sale.product}</p>
                    <p className="text-xs text-muted-foreground">{sale.customer}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <p className="text-sm font-semibold">{sale.value}</p>
                    <p className="text-xs text-muted-foreground">{sale.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Low Stock Alert */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Estoque Baixo</CardTitle>
            <CardDescription>
              Produtos que precisam de reposição
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {lowStock.map((item) => (
                <div key={item.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">{item.product}</p>
                    <Badge variant="destructive">Baixo</Badge>
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Atual: {item.current} unidades</span>
                    <span>Mínimo: {item.min} unidades</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full bg-destructive"
                      style={{ width: `${(item.current / item.min) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

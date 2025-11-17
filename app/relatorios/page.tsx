"use client"

import {
  BarChart3,
  TrendingUp,
  DollarSign,
  Package,
  ShoppingCart,
  Users,
  Download,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function RelatoriosPage() {
  const produtosMaisVendidos = [
    { produto: "Betta Halfmoon Azul", vendas: 45, receita: 2025.00, categoria: "Peixes" },
    { produto: "Aquário 50L Completo", vendas: 23, receita: 8740.00, categoria: "Aquários" },
    { produto: "Ração TetraMin 200g", vendas: 67, receita: 2345.00, categoria: "Alimentos" },
    { produto: "Filtro Externo 1000L/h", vendas: 18, receita: 3960.00, categoria: "Equipamentos" },
    { produto: "Neon Tetra (cardume 10un)", vendas: 32, receita: 1920.00, categoria: "Peixes" },
  ]

  const vendasPorCategoria = [
    { categoria: "Peixes", vendas: 145, receita: 6850.00, participacao: 28 },
    { categoria: "Aquários", vendas: 45, receita: 12300.00, participacao: 35 },
    { categoria: "Equipamentos", vendas: 89, receita: 8920.00, participacao: 25 },
    { categoria: "Alimentos", vendas: 156, receita: 3140.00, participacao: 8 },
    { categoria: "Químicos", vendas: 78, receita: 2184.00, participacao: 4 },
  ]

  const vendasMensais = [
    { mes: "Janeiro", vendas: 87, receita: 12450.00 },
    { mes: "Fevereiro", vendas: 92, receita: 13200.00 },
    { mes: "Março", vendas: 105, receita: 15800.00 },
    { mes: "Abril", vendas: 98, receita: 14100.00 },
    { mes: "Maio", vendas: 112, receita: 16500.00 },
    { mes: "Junho", vendas: 125, receita: 18900.00 },
  ]

  const receitaTotal = vendasPorCategoria.reduce((acc, cat) => acc + cat.receita, 0)
  const vendasTotais = vendasPorCategoria.reduce((acc, cat) => acc + cat.vendas, 0)
  const ticketMedio = receitaTotal / vendasTotais

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Relatórios</h1>
          <p className="text-muted-foreground">
            Análises e insights sobre o desempenho do negócio
          </p>
        </div>
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          Exportar Relatório
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <Card className="bg-gradient-soft-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ {receitaTotal.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">
              últimos 30 dias
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-soft-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Vendas</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{vendasTotais}</div>
            <p className="text-xs text-muted-foreground">
              últimos 30 dias
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ticket Médio</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ {ticketMedio.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">
              por venda
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Crescimento</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">+12.5%</div>
            <p className="text-xs text-muted-foreground">
              vs mês anterior
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="produtos" className="space-y-4">
        <TabsList>
          <TabsTrigger value="produtos">Produtos</TabsTrigger>
          <TabsTrigger value="categorias">Categorias</TabsTrigger>
          <TabsTrigger value="evolucao">Evolução Mensal</TabsTrigger>
        </TabsList>

        <TabsContent value="produtos" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Produtos Mais Vendidos</CardTitle>
              <CardDescription>
                Ranking dos produtos com melhor desempenho de vendas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>#</TableHead>
                    <TableHead>Produto</TableHead>
                    <TableHead>Categoria</TableHead>
                    <TableHead className="text-center">Vendas</TableHead>
                    <TableHead className="text-right">Receita</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {produtosMaisVendidos.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-bold">{index + 1}º</TableCell>
                      <TableCell className="font-medium">{item.produto}</TableCell>
                      <TableCell>
                        <Badge variant="secondary">{item.categoria}</Badge>
                      </TableCell>
                      <TableCell className="text-center">{item.vendas}</TableCell>
                      <TableCell className="text-right font-semibold">
                        R$ {item.receita.toFixed(2)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="categorias" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Vendas por Categoria</CardTitle>
              <CardDescription>
                Distribuição de vendas e receita por categoria de produto
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {vendasPorCategoria.map((cat) => (
                  <div key={cat.categoria} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Package className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{cat.categoria}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-muted-foreground">
                          {cat.vendas} vendas
                        </span>
                        <span className="font-semibold">
                          R$ {cat.receita.toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-ocean"
                          style={{ width: `${cat.participacao}%` }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground w-12 text-right">
                        {cat.participacao}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="evolucao" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Evolução de Vendas</CardTitle>
              <CardDescription>
                Histórico mensal de vendas e receita
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Mês</TableHead>
                    <TableHead className="text-center">Vendas</TableHead>
                    <TableHead className="text-right">Receita</TableHead>
                    <TableHead className="text-right">Crescimento</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {vendasMensais.map((mes, index) => {
                    const crescimento = index > 0
                      ? ((mes.receita - vendasMensais[index - 1].receita) / vendasMensais[index - 1].receita * 100)
                      : 0
                    return (
                      <TableRow key={mes.mes}>
                        <TableCell className="font-medium">{mes.mes}</TableCell>
                        <TableCell className="text-center">{mes.vendas}</TableCell>
                        <TableCell className="text-right font-semibold">
                          R$ {mes.receita.toFixed(2)}
                        </TableCell>
                        <TableCell className="text-right">
                          {index > 0 && (
                            <span className={crescimento >= 0 ? "text-green-500" : "text-red-500"}>
                              {crescimento >= 0 ? "+" : ""}{crescimento.toFixed(1)}%
                            </span>
                          )}
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

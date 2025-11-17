"use client"

import { useState } from "react"
import { Plus, Search, Calendar, DollarSign, TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function VendasPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const vendas = [
    {
      id: "#VND-001",
      data: "17/11/2025 14:30",
      cliente: "João Silva",
      produtos: [
        { nome: "Betta Halfmoon Azul", qtd: 1, preco: 45.00 }
      ],
      total: 45.00,
      status: "concluida",
      pagamento: "Pix"
    },
    {
      id: "#VND-002",
      data: "17/11/2025 12:15",
      cliente: "Maria Santos",
      produtos: [
        { nome: "Aquário 50L Completo", qtd: 1, preco: 380.00 },
        { nome: "Filtro Externo 1000L/h", qtd: 1, preco: 220.00 }
      ],
      total: 600.00,
      status: "concluida",
      pagamento: "Cartão Crédito"
    },
    {
      id: "#VND-003",
      data: "16/11/2025 16:45",
      cliente: "Pedro Costa",
      produtos: [
        { nome: "Ração TetraMin 200g", qtd: 1, preco: 35.00 }
      ],
      total: 35.00,
      status: "concluida",
      pagamento: "Dinheiro"
    },
    {
      id: "#VND-004",
      data: "16/11/2025 10:20",
      cliente: "Ana Oliveira",
      produtos: [
        { nome: "Filtro Externo 1000L/h", qtd: 1, preco: 220.00 }
      ],
      total: 220.00,
      status: "concluida",
      pagamento: "Pix"
    },
    {
      id: "#VND-005",
      data: "15/11/2025 15:30",
      cliente: "Carlos Mendes",
      produtos: [
        { nome: "Neon Tetra (cardume 10un)", qtd: 2, preco: 120.00 },
        { nome: "Substrato Plantado 5kg", qtd: 1, preco: 55.00 }
      ],
      total: 175.00,
      status: "concluida",
      pagamento: "Cartão Débito"
    },
  ]

  const vendasHoje = vendas.filter(v => v.data.includes("17/11/2025"))
  const totalHoje = vendasHoje.reduce((acc, v) => acc + v.total, 0)
  const totalMes = vendas.reduce((acc, v) => acc + v.total, 0)

  const getStatusBadge = (status: string) => {
    if (status === "concluida") {
      return <Badge variant="success">Concluída</Badge>
    }
    if (status === "pendente") {
      return <Badge variant="warning">Pendente</Badge>
    }
    return <Badge variant="destructive">Cancelada</Badge>
  }

  const getPagamentoBadge = (pagamento: string) => {
    const colors: Record<string, string> = {
      "Pix": "bg-primary text-primary-foreground",
      "Cartão Crédito": "bg-secondary text-secondary-foreground",
      "Cartão Débito": "bg-accent text-accent-foreground",
      "Dinheiro": "bg-muted text-muted-foreground",
    }
    return (
      <Badge className={colors[pagamento] || ""}>
        {pagamento}
      </Badge>
    )
  }

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Vendas</h1>
          <p className="text-muted-foreground">
            Gerencie e acompanhe todas as vendas da loja
          </p>
        </div>
        <Button className="gap-2 bg-gradient-ocean text-white hover:opacity-90">
          <Plus className="h-4 w-4" />
          Nova Venda
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4 mb-6">
        <Card className="bg-gradient-soft-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Vendas Hoje</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{vendasHoje.length}</div>
            <p className="text-xs text-muted-foreground">
              +2 desde ontem
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-soft-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Receita Hoje</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ {totalHoje.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">
              +12.5% vs ontem
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Vendas do Mês</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{vendas.length}</div>
            <p className="text-xs text-muted-foreground">
              novembro 2025
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Receita do Mês</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ {totalMes.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">
              +8.1% vs mês anterior
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Histórico de Vendas</CardTitle>
              <CardDescription>
                Visualize todas as vendas realizadas
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar vendas..."
                  className="pl-8 w-[300px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="todas" className="w-full">
            <TabsList>
              <TabsTrigger value="todas">Todas</TabsTrigger>
              <TabsTrigger value="hoje">Hoje</TabsTrigger>
              <TabsTrigger value="semana">Esta Semana</TabsTrigger>
              <TabsTrigger value="mes">Este Mês</TabsTrigger>
            </TabsList>

            <TabsContent value="todas">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID Venda</TableHead>
                    <TableHead>Data/Hora</TableHead>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Produtos</TableHead>
                    <TableHead>Pagamento</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {vendas
                    .filter(v =>
                      v.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      v.cliente.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((venda) => (
                      <TableRow key={venda.id}>
                        <TableCell className="font-medium">{venda.id}</TableCell>
                        <TableCell className="text-xs">{venda.data}</TableCell>
                        <TableCell>{venda.cliente}</TableCell>
                        <TableCell>
                          <div className="flex flex-col gap-1">
                            {venda.produtos.map((p, i) => (
                              <span key={i} className="text-xs">
                                {p.qtd}x {p.nome}
                              </span>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>{getPagamentoBadge(venda.pagamento)}</TableCell>
                        <TableCell className="font-semibold">
                          R$ {venda.total.toFixed(2)}
                        </TableCell>
                        <TableCell>{getStatusBadge(venda.status)}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="hoje">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID Venda</TableHead>
                    <TableHead>Data/Hora</TableHead>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Produtos</TableHead>
                    <TableHead>Pagamento</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {vendasHoje.map((venda) => (
                    <TableRow key={venda.id}>
                      <TableCell className="font-medium">{venda.id}</TableCell>
                      <TableCell className="text-xs">{venda.data}</TableCell>
                      <TableCell>{venda.cliente}</TableCell>
                      <TableCell>
                        <div className="flex flex-col gap-1">
                          {venda.produtos.map((p, i) => (
                            <span key={i} className="text-xs">
                              {p.qtd}x {p.nome}
                            </span>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>{getPagamentoBadge(venda.pagamento)}</TableCell>
                      <TableCell className="font-semibold">
                        R$ {venda.total.toFixed(2)}
                      </TableCell>
                      <TableCell>{getStatusBadge(venda.status)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

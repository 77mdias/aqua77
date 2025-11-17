"use client"

import { useState } from "react"
import { Plus, Search, Mail, Phone, MapPin, ShoppingBag } from "lucide-react"
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

export default function ClientesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const clientes = [
    {
      id: 1,
      nome: "João Silva",
      email: "joao.silva@email.com",
      telefone: "(11) 98765-4321",
      cidade: "São Paulo - SP",
      totalCompras: 3,
      valorTotal: 450.00,
      ultimaCompra: "17/11/2025",
      status: "ativo"
    },
    {
      id: 2,
      nome: "Maria Santos",
      email: "maria.santos@email.com",
      telefone: "(11) 97654-3210",
      cidade: "São Paulo - SP",
      totalCompras: 5,
      valorTotal: 1250.00,
      ultimaCompra: "17/11/2025",
      status: "vip"
    },
    {
      id: 3,
      nome: "Pedro Costa",
      email: "pedro.costa@email.com",
      telefone: "(11) 96543-2109",
      cidade: "Guarulhos - SP",
      totalCompras: 2,
      valorTotal: 180.00,
      ultimaCompra: "16/11/2025",
      status: "ativo"
    },
    {
      id: 4,
      nome: "Ana Oliveira",
      email: "ana.oliveira@email.com",
      telefone: "(11) 95432-1098",
      cidade: "Osasco - SP",
      totalCompras: 7,
      valorTotal: 2100.00,
      ultimaCompra: "16/11/2025",
      status: "vip"
    },
    {
      id: 5,
      nome: "Carlos Mendes",
      email: "carlos.mendes@email.com",
      telefone: "(11) 94321-0987",
      cidade: "Barueri - SP",
      totalCompras: 4,
      valorTotal: 680.00,
      ultimaCompra: "15/11/2025",
      status: "ativo"
    },
    {
      id: 6,
      nome: "Juliana Souza",
      email: "juliana.souza@email.com",
      telefone: "(11) 93210-9876",
      cidade: "São Paulo - SP",
      totalCompras: 1,
      valorTotal: 85.00,
      ultimaCompra: "14/11/2025",
      status: "novo"
    },
  ]

  const getStatusBadge = (status: string) => {
    if (status === "vip") {
      return <Badge className="bg-gradient-vibrant">VIP</Badge>
    }
    if (status === "ativo") {
      return <Badge variant="success">Ativo</Badge>
    }
    return <Badge variant="secondary">Novo</Badge>
  }

  const clientesVip = clientes.filter(c => c.status === "vip").length
  const clientesAtivos = clientes.filter(c => c.status === "ativo" || c.status === "vip").length
  const ticketMedio = clientes.reduce((acc, c) => acc + c.valorTotal, 0) / clientes.length

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Clientes</h1>
          <p className="text-muted-foreground">
            Gerencie seus clientes e acompanhe o histórico de compras
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Novo Cliente
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Clientes</CardTitle>
            <ShoppingBag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{clientes.length}</div>
            <p className="text-xs text-muted-foreground">
              +2 este mês
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-soft-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Clientes Ativos</CardTitle>
            <ShoppingBag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{clientesAtivos}</div>
            <p className="text-xs text-muted-foreground">
              {((clientesAtivos / clientes.length) * 100).toFixed(0)}% do total
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-soft-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Clientes VIP</CardTitle>
            <ShoppingBag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{clientesVip}</div>
            <p className="text-xs text-muted-foreground">
              acima de R$ 1.000 em compras
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ticket Médio</CardTitle>
            <ShoppingBag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ {ticketMedio.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">
              por cliente
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Lista de Clientes</CardTitle>
              <CardDescription>
                Visualize e gerencie todos os clientes cadastrados
              </CardDescription>
            </div>
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar clientes..."
                className="pl-8 w-[300px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Contato</TableHead>
                <TableHead>Localização</TableHead>
                <TableHead>Compras</TableHead>
                <TableHead>Total Gasto</TableHead>
                <TableHead>Última Compra</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clientes
                .filter(c =>
                  c.nome.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  c.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  c.telefone.includes(searchQuery)
                )
                .map((cliente) => (
                  <TableRow key={cliente.id}>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium">{cliente.nome}</span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Mail className="h-3 w-3" />
                          {cliente.email}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1 text-sm">
                        <Phone className="h-3 w-3 text-muted-foreground" />
                        {cliente.telefone}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1 text-sm">
                        <MapPin className="h-3 w-3 text-muted-foreground" />
                        {cliente.cidade}
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      {cliente.totalCompras}
                    </TableCell>
                    <TableCell className="font-semibold">
                      R$ {cliente.valorTotal.toFixed(2)}
                    </TableCell>
                    <TableCell className="text-sm">
                      {cliente.ultimaCompra}
                    </TableCell>
                    <TableCell>
                      {getStatusBadge(cliente.status)}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

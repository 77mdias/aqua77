"use client"

import { useState } from "react"
import { Plus, Search, Filter, Edit, Trash2, Package } from "lucide-react"
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

export default function ProdutosPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const produtos = [
    {
      id: 1,
      nome: "Betta Halfmoon Azul",
      categoria: "Peixes",
      estoque: 15,
      estoqueMin: 5,
      preco: 45.00,
      status: "normal"
    },
    {
      id: 2,
      nome: "Aquário 50L Completo",
      categoria: "Aquários",
      estoque: 8,
      estoqueMin: 3,
      preco: 380.00,
      status: "normal"
    },
    {
      id: 3,
      nome: "Ração TetraMin 200g",
      categoria: "Alimentos",
      estoque: 5,
      estoqueMin: 10,
      preco: 35.00,
      status: "baixo"
    },
    {
      id: 4,
      nome: "Filtro Externo 1000L/h",
      categoria: "Equipamentos",
      estoque: 12,
      estoqueMin: 4,
      preco: 220.00,
      status: "normal"
    },
    {
      id: 5,
      nome: "Condicionador Alcon 500ml",
      categoria: "Químicos",
      estoque: 3,
      estoqueMin: 8,
      preco: 28.00,
      status: "baixo"
    },
    {
      id: 6,
      nome: "Termostato 100W",
      categoria: "Equipamentos",
      estoque: 2,
      estoqueMin: 5,
      preco: 85.00,
      status: "baixo"
    },
    {
      id: 7,
      nome: "Neon Tetra (cardume 10un)",
      categoria: "Peixes",
      estoque: 20,
      estoqueMin: 10,
      preco: 60.00,
      status: "normal"
    },
    {
      id: 8,
      nome: "Substrato Plantado 5kg",
      categoria: "Decoração",
      estoque: 18,
      estoqueMin: 8,
      preco: 55.00,
      status: "normal"
    },
  ]

  const categorias = ["Todos", "Peixes", "Aquários", "Equipamentos", "Alimentos", "Químicos", "Decoração"]

  const getStatusBadge = (status: string) => {
    if (status === "baixo") {
      return <Badge variant="destructive">Estoque Baixo</Badge>
    }
    return <Badge variant="success">Normal</Badge>
  }

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Produtos</h1>
          <p className="text-muted-foreground">
            Gerencie o estoque de produtos da loja
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Novo Produto
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Produtos</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{produtos.length}</div>
            <p className="text-xs text-muted-foreground">
              {categorias.length - 1} categorias
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Estoque Total</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {produtos.reduce((acc, p) => acc + p.estoque, 0)}
            </div>
            <p className="text-xs text-muted-foreground">
              unidades em estoque
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Estoque Baixo</CardTitle>
            <Package className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">
              {produtos.filter(p => p.status === "baixo").length}
            </div>
            <p className="text-xs text-muted-foreground">
              produtos precisam reposição
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-soft-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Valor em Estoque</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              R$ {produtos.reduce((acc, p) => acc + (p.preco * p.estoque), 0).toFixed(2)}
            </div>
            <p className="text-xs text-muted-foreground">
              valor total do inventário
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Lista de Produtos</CardTitle>
              <CardDescription>
                Visualize e gerencie todos os produtos do estoque
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar produtos..."
                  className="pl-8 w-[300px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="Todos" className="w-full">
            <TabsList>
              {categorias.map((cat) => (
                <TabsTrigger key={cat} value={cat}>
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>

            {categorias.map((categoria) => (
              <TabsContent key={categoria} value={categoria}>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Produto</TableHead>
                      <TableHead>Categoria</TableHead>
                      <TableHead>Estoque</TableHead>
                      <TableHead>Preço</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {produtos
                      .filter(p => categoria === "Todos" || p.categoria === categoria)
                      .filter(p => p.nome.toLowerCase().includes(searchQuery.toLowerCase()))
                      .map((produto) => (
                        <TableRow key={produto.id}>
                          <TableCell className="font-medium">{produto.nome}</TableCell>
                          <TableCell>{produto.categoria}</TableCell>
                          <TableCell>
                            <div className="flex flex-col">
                              <span>{produto.estoque} un</span>
                              <span className="text-xs text-muted-foreground">
                                Mín: {produto.estoqueMin} un
                              </span>
                            </div>
                          </TableCell>
                          <TableCell>R$ {produto.preco.toFixed(2)}</TableCell>
                          <TableCell>{getStatusBadge(produto.status)}</TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button variant="ghost" size="icon">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon">
                                <Trash2 className="h-4 w-4 text-destructive" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
